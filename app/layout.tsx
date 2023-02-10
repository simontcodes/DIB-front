'use client'

import { SessionProvider } from "next-auth/react";
import "../styles/globals.css"
import Navbar from "./Navbar";
// import Providers from "./providers";

interface IProps {
  children: React.ReactNode;
  session: any;
}

export default function RootLayout({children, session}: IProps) {
    // Layouts must accept a children prop.
    // This will be populated with nested layouts or pages

  return (
    <html lang="en">
      <body className="bg-slate-100">
        {/* <Providers> */}
        <SessionProvider session={session}>
          <Navbar />
          <div className="flex flex-col items-center pt-32 pb-16 px-4 md:px-8 lg:px-16">
            {children}
          </div>
        </SessionProvider>
        {/* </Providers> */}
      </body>
    </html>
  );
}