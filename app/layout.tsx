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
          <main className="flex flex-col items-center pt-16 pb-16">
            {children}
          </main>
        </SessionProvider>
        {/* </Providers> */}
      </body>
    </html>
  );
}