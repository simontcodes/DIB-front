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
      <section className='flex flex-col h-[40rem] w-full justify-center py-16 px-4 md:px-8 lg:px-16 bg-emerald-400'>

        <div className='flex justify-center items-center gap-16'>

          <div className='flex flex-col'>
            <div className='flex justify-center w-full h-[6rem]'>
              <h1 className='text-[3rem]'>Connecting talent with companies</h1>
            </div>

            <div className='flex justify-center h-[3rem] w-full overflow-hidden relative'>
              <div className='flex absolute -top-2'>
                <p className='whitespace-pre text-4xl leading-[3.5rem]'>Develop your skills as a </p>
                <ul className='font-bold animate-rolodex text-4xl leading-[3.5rem]'>
                  <li className='leading-[3.5rem]'>Fullstack Developer</li>
                  <li className='leading-[3.5rem]'>Frontend Developer</li>
                  <li className='leading-[3.5rem]'>Backend Developer</li>
                  <li className='leading-[3.5rem]'>Project Manager</li>
                  <li className='leading-[3.5rem]'>UX/UI</li>
                  <li className='leading-[3.5rem]'>QA Tester</li>
                  <li className='leading-[3.5rem]'>DevOps</li>
                  <li className='leading-[3.5rem]'>Fullstack Developer</li>
                </ul>
              </div>
            </div>
          </div>

          <div className='h-[20rem]'>
            <img className='h-full object-fill' src='/images/globe-connect.png' alt='globe' />
          </div>

        </div>

        <div className='flex h-16 w-full justify-center items-center'>
          <span>Join other memebers to build REAL PROJECTS and gain REAL SKILLS</span>
        </div>
      </section>

      {/* Bottom-Left background border */}
      <div className='w-full'>
        {/* <img src='/images/bottom-hero.svg' alt='hero bottom' /> */}
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 30">
          <path className='fill-[rgb(52,211,153)]' d="M 0 0 L 0 30 L 400 0 H 0 Z"/>
        </svg>
      </div>

      <section className='h-[40rem]'>
        The WHY
      </section>

      {/* Top-Right background border */}
      <div className='w-full'>
        {/* <img src='/images/bottom-hero.svg' alt='hero bottom' /> */}
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -30 400 30">
          <path className='fill-[rgb(52,211,153)]' d="M 0 0 L 400 -30 L 400 0 H 0 Z"/>
        </svg>
      </div>
      <section className='flex h-[40rem] w-full justify-center bg-emerald-400'>
        The HOW
      </section>
      {/* Bottom-Right background border */}
      <div className='w-full'>
        {/* <img src='/images/bottom-hero.svg' alt='hero bottom' /> */}
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 30">
          <path className='fill-[rgb(52,211,153)]' d="M 0 0 L 400 30 L 400 0 H 0 Z"/>
        </svg>
      </div>

      <section className='h-[20rem]'>
        Socials if we have any
      </section>
    </>
  )
}
