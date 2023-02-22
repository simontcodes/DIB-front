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

        const { email, password } = credentials as any
        console.log("Login attempted")

        const res = await fetch('http://localhost:8080/login/dibs/', {
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

        // ------ TEMPLATE CODE ------ //
        // Add logic here to look up the user from the credentials supplied
        // const user = { id: "1", name: "J Smith", email: "jsmith@example.com" }
  
        // if (user) {
        //   // Any object returned will be saved in `user` property of the JWT
        //   return user
        // } else {
        //   // If you return null then an error will be displayed advising the user to check their details.
        //   return null
  
        //   // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
        // }
        // ------ TEMPLATE CODE ------ //
      }
    })
    // ...add more providers here
  ],
  callbacks: {
    // async session({ session, token }) {
    //   // console.log("checking token :", token)
    //   if (session?.user) {
    //     session.user.id = token.sub;
    //   }
    //   return session;
    // },
    // async jwt({ token, user, account, profile, isNewUser }) {
    //   console.log(token)
    //   if (account) {
    //     token.accessToken = account.access_token
    //   }
    //   return token
    // } 
    async session({session, token, user}) {
      session.user = token;
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
    // signOut: "/"
  },
}

export default NextAuth(authOptions)