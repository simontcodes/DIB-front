'use client'

import Image from 'next/image'
import { useSession, signIn, signOut } from 'next-auth/react'
import { Inter } from '@next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const { data: session } = useSession()

  if (session?.user) {
    localStorage.setItem("User_Id", session.user.id)
    localStorage.setItem("accessToken", session.user.token)
  }

  return (
    <>
      <div className='w-full pt-16 px-4 md:px-8 lg:px-16'>
        <h1>Connecting tech talent with companies</h1>

        <div>
          <div className='flex border h-10 overflow-hidden'>
            <p className='whitespace-pre text-4xl'>Develop your skills as a </p>
            <ul className='font-bold animate-rolodex text-4xl'>
              <li>Fullstack Developer</li>
              <li>Frontend Developer</li>
              <li>Backend Developer</li>
              <li>Project Manager</li>
              <li>UX/UI</li>
              <li>QA Tester</li>
              <li>DevOps</li>
              <li>Fullstack Developer</li>
            </ul>
          </div>
        </div>

        <span>Join other thousands of memebers to build REAL PROJECTS and DEVELOP YOUR SKILLS</span>
      </div>

      <div>
        The WHY
      </div>

      <div>
        The HOW
      </div>

      <div>
        Socials if we have any
      </div>
    </>
  )
}
