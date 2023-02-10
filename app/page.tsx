'use client'

import Image from 'next/image'
import { useSession, signIn, signOut } from 'next-auth/react'
import { Inter } from '@next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const {data: session} = useSession()

  if(session?.user) {
    localStorage.setItem("User_Id", session.user.id)
    localStorage.setItem("accessToken", session.user.token)
  }

  return (
    <>
      <h1>Connecting tech talent with companies</h1>
    </>
  )
}
