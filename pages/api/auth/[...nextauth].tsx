import CredentialsProvider from "next-auth/providers/credentials"
import NextAuth, { NextAuthOptions } from "next-auth"
// import { userAgent } from "next/server"

export const authOptions:NextAuthOptions = {
  // Configure one or more authentication providers
  secret: "Something herer to see if it works",
  providers: [
    CredentialsProvider({
      // The name to display on the sign in form (e.g. "Sign in with...")
      name: "Credentials",
      // `credentials` is used to generate a form on the sign in page.
      // You can specify which fields should be submitted, by adding keys to the `credentials` object.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials, req) {

        const isAdmin = JSON.parse(req?.body?.admin)
        const url = `http://localhost:8080/login/${isAdmin ? 'admins' : 'dibs'}/`

        const { email, password } = credentials as any

        const res = await fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            password,
          }),
        });

        const user = await res.json()
        // console.log("Checking user :", user)

        if (res.ok && user) {
          return user;
        } else {
          return null
        }

      }
    })
    // ...add more providers here
  ],
  callbacks: {
    async session({session, token}) {
      session.user = token;
      const isAdmin = token?.role?.includes("Admin")

      if (token?.id) {
        const url = `http://localhost:8080/${isAdmin ? 'admins' : 'dibs'}/${token?.id}`;
        const apiResp = await fetch(`http://localhost:8080/${isAdmin ? 'admins' : 'dibs'}/${token?.id}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `bearer ${token?.token}`,
          },
        });

        const response = await apiResp.json()
        session.user = { ...session.user, ...response };
      }
      return session;
    },
    async jwt({token, user}) {
      return ({...token, ...user})
    }
  },
  session: {
    strategy: "jwt"
  },
  // session: {
  //   strategy: "database"
  // },
  pages: {
    signIn: "/login",
    // signOut: "/",
    // error: "/login/error",
  },
}

export default NextAuth(authOptions)