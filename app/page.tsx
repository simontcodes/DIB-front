'use client'

import Image from 'next/image'
import { useSession, signIn, signOut } from 'next-auth/react'
import { Inter } from '@next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const avatarPlaceholder = [1,2,3,4,5,6,7,8,9,10,11]

  const { data: session } = useSession()

  if (session?.user) {
    localStorage.setItem("User_Id", session.user.id)
    localStorage.setItem("accessToken", session.user.token)
  }

  return (
    <>
      <section className='flex flex-col h-[40rem] w-full justify-center py-16 px-4 md:px-8 lg:px-16 bg-emerald-400'>

        <div className='flex justify-center items-center gap-16 mb-8'>

          <div className='flex flex-col'>
            <div className='flex justify-center w-full mb-4'>
              <h1 className='text-[3rem]'>Connecting talent with companies</h1>
            </div>

            <div className='flex justify-start xl:justify-center h-[6rem] w-full overflow-hidden relative'>
              <div className='flex flex-col xl:flex-row absolute -top-2'>
                <p className='whitespace-pre text-4xl leading-[3.5rem]'>Develop your skills as a </p>
                <div className='flex h-[3rem] w-full overflow-hidden -top-2'>
                  <ul className='font-bold animate-rolodex text-4xl leading-[3.5rem] h-[3rem]'>
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
          </div>

          <div className='flex h-[20rem] shrink-0'>
            <img className='h-full object-cover' src='/images/globe-connect.png' alt='globe' />
          </div>

        </div>

        <div className='flex flex-col w-full justify-center items-center'>
          <span className='text-2xl'>Join other members!</span>
          <span className='text-2xl'>Build REAL PROJECTS, Gain REAL SKILLS</span>
          <div className='flex -space-x-5 overflow-hidden mt-4'>
            {avatarPlaceholder.map((user, index) => (
              <div className={`flex shrink-0 items-center justify-center border-2 border-slate-700 rounded-full h-16 w-16 overflow-hidden z-[1]`} >
                <img 
                  // className='scale-[1.05] bg-white'
                  className={`scale-[1.15] bg-white z-[2] inline-flex object-cover`}
                  src={`/images/placeholders/placeholder-avatar-${user}.svg`} 
                  alt='avatar' 
                  key={index} 
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom-Left background border */}
      <div className='w-full'>
        {/* <img src='/images/bottom-hero.svg' alt='hero bottom' /> */}
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 30">
          <path className='-z-10 fill-[rgb(52,211,153)]' d="M 0 0 L 0 30 L 400 0 H 0 Z"/>
        </svg>
      </div>

      <section className='h-[15rem] w-full'>
        <div className='flex flex-col h-full w-full items-center justify-center'>
          <h2 className='text-[2rem] mb-8'>Starting somewhere is not always the easiest!</h2>
          <div className='text-xl'>We believe in giving everyone the basic tool and a platform to build the skills needed to get started</div>
          <div className='text-xl'>Become a DIB and work with other collaborators, create real projects and gain work experience!</div>
        </div>
      </section>

      {/* Top-Right background border */}
      <div className='w-full'>
        {/* <img src='/images/bottom-hero.svg' alt='hero bottom' /> */}
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -30 400 30">
          <path className='-z-10 fill-[rgb(52,211,153)]' d="M 0 0 L 400 -30 L 400 0 H 0 Z"/>
        </svg>
      </div>
      <section className='h-[15rem] w-full bg-emerald-400'>
        <div className='flex flex-col h-full w-full items-center justify-center'>
          <h2 className='text-[2rem] mb-8'>This is where start-ups meets talent!</h2>
          <div className='text-xl'>Gain skills are you build along with other members.</div>
          <div className='text-xl'>See your projects go live!</div>
        </div>
      </section>
      {/* Bottom-Right background border */}
      <div className='w-full'>
        {/* <img src='/images/bottom-hero.svg' alt='hero bottom' /> */}
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 30">
          <path className='-z-10 fill-[rgb(52,211,153)]' d="M 0 0 L 400 30 L 400 0 H 0 Z"/>
        </svg>
      </div>

      <section>
        <div className='flex flex-col items-center py-16'>
          <h2 className='text-[2rem] mb-8'>Find us on social media!</h2>
          <div className='flex w-full justify-center gap-4'>
            <a className='flex flex-col items-center' href={`https://github.com/`} target="_blank" rel="noopener noreferrer">
              <div className='h-16 w-16'>
                <Image 
                  className='object-cover'
                  src={`/icons/github.svg`}
                  alt={`github logo`}
                  width={200}
                  height={200}
                  />
              </div>
              <span>Github</span>
            </a>
            <a className='flex flex-col items-center' href={`https://linkedin.com/`} target="_blank" rel="noopener noreferrer">
              <div className='h-16 w-16'>
                <Image 
                  className='object-cover'
                  src={`/icons/linkedin.svg`}
                  alt={`linkedin logo`}
                  width={200}
                  height={200}
                  />
              </div>
              <span>LinkedIn</span>
            </a>
            <a className='flex flex-col items-center' href={`https://twitter.com/`} target="_blank" rel="noopener noreferrer">
              <div className='h-16 w-16'>
                <Image 
                  className='object-cover'
                  src={`/icons/twitter.svg`}
                  alt={`twitter logo`}
                  width={200}
                  height={200}
                  />
              </div>
              <span>Twitter</span>
            </a>
            <a className='flex flex-col items-center' href={`https://facebook.com/`} target="_blank" rel="noopener noreferrer">
              <div className='h-16 w-16'>
                <Image 
                  className='object-cover'
                  src={`/icons/facebook.svg`}
                  alt={`facebook logo`}
                  width={200}
                  height={200}
                  />
              </div>
              <span>Facebook</span>
            </a>
            <a className='flex flex-col items-center' href={`https://instagram.com/`} target="_blank" rel="noopener noreferrer">
              <div className='h-16 w-16'>
                <Image 
                  className='object-cover'
                  src={`/icons/instagram.svg`}
                  alt={`instagram logo`}
                  width={200}
                  height={200}
                  />
              </div>
              <span>Instagram</span>
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
