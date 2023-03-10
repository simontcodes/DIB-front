// export { default } from "next-auth/middleware"
import { withAuth } from "next-auth/middleware"
import { NextResponse } from "next/server"

export default withAuth(
  function middleware(req) {
    if(req.nextUrl.pathname.startsWith("/admin") && req.nextauth.token?.role !== "admin") {
      return NextResponse.rewrite(
        new URL("/login?message=You are not authorized!!", req.url)
      )
    }

    // Insert roles for he users
    // if(req.nextUrl.pathname.startsWith("/dashboard") && req.nextauth.token?.role !== "admin") {
    //   return NextResponse.rewrite(
    //     new URL("/login?message=You are not authorized!!", req.url)
    //   )
    // }
    
  },
  {
    callbacks: {
      authorized:({token}) => !!token,
    }
  }
)

export const config = {
  matcher: ["/dashboard"]
}