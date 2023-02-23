'use client'

import Image from "next/image"
import Link from "next/link"

// TO GET THE SESSION AND USER FROM NEXT AUTH
import { useSession } from "next-auth/react"
import { useState, useEffect } from "react"
import { User } from 'types/interfaces'

// type User = {
//   _id: string,
//   name: string,
//   email: string,
//   password: string,
//   role: string,
//   __v: number
// }

type PageProps = {
  params: {
    userId: string
  }
}

export default function Dashboard(props: PageProps) {

  const { data: session } = useSession()
  const [ userData, setUserData ] = useState<User>()
  const [ userId, setUserId ] = useState()
  const [ userRoles, setUserRoles ] = useState<string[]>([])

  const fetchUser = async () => {
    const res = await fetch(`http://localhost:8080/dibs/${session?.user?.id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `bearer ${session?.user?.token}`
      }
    });
    const data = await res.json()
    // const roleToPush:string[] = []
    // roleToPush.push(data.role)
    setUserId(data._id)
    // setUserRoles(roleToPush)
    setUserRoles(data.role)
    setUserData(data)
  }

  // FUNCTION TO CREATE THE ROLE TAGS DEPENDING ON USER ROLES
  const tokenSwitch = (roles: string | undefined, index: number) => {
    switch(roles) {
      case "Fullstack Developer":
        return (
          <div key={index} className='flex items-center gap-1 bg-emerald-900 w-fit py-1 px-3 rounded-md '>
            <div className='h-4 w-4 bg-purple-500 rounded-full'></div>
            <span className='font-bold text-white'>FullStack</span>
          </div>
        )
      case "Frontend Developer":
        return (
          <div key={index} className='flex items-center gap-1 bg-emerald-900 w-fit py-1 px-3 rounded-md'>
            <div className='h-4 w-4 bg-green-500 rounded-full'></div>
            <span className='font-bold text-white'>Front-End</span>
          </div>
        )
      case "Backend Developer":
        return (
          <div key={index} className='flex items-center gap-1 bg-emerald-900 w-fit py-1 px-3 rounded-md'>
            <div className='h-4 w-4 bg-blue-500 rounded-full'></div>
            <span className='font-bold text-white'>Back-End</span>
          </div>
        )
      case "Project Manager":
        return (
          <div key={index} className='flex items-center gap-1 bg-emerald-900 w-fit py-1 px-3 rounded-md'>
            <div className='h-4 w-4 bg-yellow-500 rounded-full'></div>
            <span className='font-bold text-white'>PM</span>
          </div>
        )
      case "QA Tester":
        return (
          <div key={index} className='flex items-center gap-1 bg-emerald-900 w-fit py-1 px-3 rounded-md'>
            <div className='h-4 w-4 bg-red-500 rounded-full'></div>
            <span className='font-bold text-white'>QA Tester</span>
          </div>
        )
      case "UX/UI":
        return (
          <div key={index} className='flex items-center gap-1 bg-emerald-900 w-fit py-1 px-3 rounded-md'>
            <div className='h-4 w-4 bg-pink-500 rounded-full'></div>
            <span className='font-bold text-white'>UX/UI</span>
          </div>
        )
      case "DevOps":
        return (
          <div key={index} className='flex items-center gap-1 bg-emerald-900 w-fit py-1 px-3 rounded-md'>
            <div className='h-4 w-4 bg-black rounded-full'></div>
            <span className='font-bold text-white'>DevOps</span>
          </div>
        )
    }
  }

  useEffect(() => {
    fetchUser()
  },[])

  // const fetchUser = async (userId: string) => {
  //   const res = await fetch(`http://localhost:8080/dibs/${userId}`)
  //   const user: User = await res.json()
  //   return user
  // }
  // const user = await fetchUser(props.params.userId)
  
  // const mockUser = {
  //   name: "Schubert Kulminko",
  //   roles: [true, true, true, true, true, true, true]
  // }

  // const roles: string[] = ["Fullstack Developer", "Frontend Developer", "Project Manager"]

  if(!userData) {
    return <p>Loading</p>
  }

  return (
    <div className="w-full max-w-[1280px] pt-16">
      <h1 className="text-4xl font-bold mb-8">Dashboard</h1>

      <div className='flex flex-col justify-center p-16 w-full h-48 relative bg-emerald-400 rounded-3xl'>
        <div className='flex justify-center items-center absolute bottom-8 right-16 h-64 w-64 overflow-hidden rounded-full border-8 bg-emerald-600'>
          <img className='w-full object-cover rounded-full' src={`https://api.dicebear.com/5.x/open-peeps/svg?seed=${userData?.name}&flip=true&translateX=5`} loading="lazy" alt='profile'/>
        </div>
        <Link className="absolute right-4 top-4 z-10 h-8 w-8" href={`/dashboard/${userId}/settings`}>
          <Image 
            src="/settings.svg" 
            alt="settings" 
            width="32" 
            height="32" 
          />
        </Link>
        <Image 
          className="absolute right-4 top-4"
          src="/settings.svg" 
          alt="settings" 
          width="32" 
          height="32" 
        />
        <div className='flex flex-col gap-4'>
          <span className='text-4xl font-bold'>Hey, {userData?.name}</span>
          <p>How are you today? Ready to tackle some projects?</p>
        </div>
      </div>

      <div className='flex flex-col mt-4 bg-emerald-500 rounded-3xl p-4' id="roles-bar">
        <div className='flex gap-2'>
          {userRoles.length == 0 ? <span className="bg-emerald-900 w-fit py-1 px-3 rounded-md text-white font-medium mx-auto">Please set your roles in settings</span> : userRoles.map((role, index) => tokenSwitch(role, index))}
          {/* {mockUser.roles[0] ? 
          <div className='flex items-center gap-1 bg-emerald-900 w-fit py-1 px-3 rounded-md '>
            <div className='h-4 w-4 bg-purple-500 rounded-full'></div>
            <span className='font-bold text-white'>FullStack</span>
          </div> 
          :""}
          {mockUser.roles[1] ? 
          <div className='flex items-center gap-1 bg-emerald-900 w-fit py-1 px-3 rounded-md'>
            <div className='h-4 w-4 bg-green-500 rounded-full'></div>
            <span className='font-bold text-white'>Front-End</span>
          </div> 
          :""}
          {mockUser.roles[2] ? 
          <div className='flex items-center gap-1 bg-emerald-900 w-fit py-1 px-3 rounded-md'>
            <div className='h-4 w-4 bg-blue-500 rounded-full'></div>
            <span className='font-bold text-white'>Back-End</span>
          </div> 
          :""}
          {mockUser.roles[3] ? 
          <div className='flex items-center gap-1 bg-emerald-900 w-fit py-1 px-3 rounded-md'>
            <div className='h-4 w-4 bg-yellow-500 rounded-full'></div>
            <span className='font-bold text-white'>PM</span>
          </div>
          :""}
          {mockUser.roles[4] ? 
          <div className='flex items-center gap-1 bg-emerald-900 w-fit py-1 px-3 rounded-md'>
            <div className='h-4 w-4 bg-red-500 rounded-full'></div>
            <span className='font-bold text-white'>QA Tester</span>
          </div>
          :""}
          {mockUser.roles[5] ? 
          <div className='flex items-center gap-1 bg-emerald-900 w-fit py-1 px-3 rounded-md'>
            <div className='h-4 w-4 bg-pink-500 rounded-full'></div>
            <span className='font-bold text-white'>UX/UI</span>
          </div>
          :""}
          {mockUser.roles[6] ? 
          <div className='flex items-center gap-1 bg-emerald-900 w-fit py-1 px-3 rounded-md'>
            <div className='h-4 w-4 bg-black rounded-full'></div>
            <span className='font-bold text-white'>DevOps</span>
          </div> 
          :""} */}
        </div>
      </div>

    </div>
  )
}

