'use client'

// import ChangePreferences from "./ChangePreferences"

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

// type PageProps = {
//   params: {
//     userId: string
//   }
// }

// export default async function Settings(props: PageProps) {
export default function Settings() {

  const { data: session } = useSession()

  const [ userData, setUserData ] = useState<User>()

  // AUTO FILL FORM
  const [ name, setName ] = useState('')

  const fetchUser = async () => {
    const res = await fetch(`http://localhost:8080/dibs/${session?.user.id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `bearer ${session?.user.token}`
      }
    });
    const data = await res.json()
    setUserData(data)
    setName(data.name)
  }

  // const fetchUser = async (userId: string) => {
  //   const res = await fetch(`http://localhost:8080/dibs/${userId}`, {
  //     method: "GET",
  //     headers: {
  //       "Content-Type": "application/json",
  //       Authorization: `bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZTUzN2JlNjAzZmYzM2U2MDA1MjBhYSIsImlhdCI6MTY3NjA2Mzk4MCwiZXhwIjoxNjc2MTUwMzgwfQ.uIwHaPjFFjOe9E-WBIWapWzpFkq51fWjEXuCZ4M6hhY`
  //     }
  //   })
  //   const user: User = await res.json()
  //   console.log(user)
  //   return user
  // }
  // const user = await fetchUser(props.params.userId)

  const maxChecked = 3
  const checkHowManyChecked = (e: any) => {
    const checked = document.querySelectorAll(".check:checked")
    const notChecked = document.querySelectorAll(".check:not(:checked)")
    // console.log(checked, notChecked)
    if (checked.length >= maxChecked + 1) {
      e.preventDefault()
      // Array.from(notChecked).forEach((el) => {
      //   console.log(el.ariaDisabled)
      //   el.ariaDisabled = 'true'
      // })
    } else {
      // Array.from(notChecked).forEach((el) => {
      //   console.log(el.ariaDisabled)
      //   el.ariaDisabled = 'null'
      // })
    }

    // Try to implement logic to disable the unused checkboxes
  }

  useEffect(() => {
    const checkboxToCheck = document.querySelectorAll(".check")
    for (let i = 0; i < checkboxToCheck.length; i++) checkboxToCheck[i].addEventListener("click", checkHowManyChecked)

    fetchUser()
  },[])

  if (!userData) {
    return <p>Loading</p>
  }

  return (
    <div className="w-full max-w-[1280px]">
      {/* <ChangePreferences user={userData}/> */}
        <form>
        <h1 className="text-4xl font-bold mb-8">Account Settings</h1>

        <div className='flex flex-col justify-center p-16 w-full h-48 relative bg-emerald-400 rounded-3xl'>
          <div className="flex flex-col absolute bottom-2 right-16 items-center">
            <div className='flex justify-center items-center h-64 w-64 overflow-hidden rounded-full border-8 bg-emerald-600'>
              <img className='w-full object-cover rounded-full' src={`https://api.dicebear.com/5.x/open-peeps/svg?seed=${userData?.name}&flip=true&translateX=5`} loading="lazy" alt='profile' />
            </div>

            <div className="flex relative w-4/5 justify-center gap-4">
              <div>
                <input id="uploaded" type="radio" value="uploaded" name="avatar-type" />
                <label className="ml-2" htmlFor="uploaded">Uploaded</label>
              </div>
              <div>
                <input id="generated" type="radio" value="generated" name="avatar-type" />
                <label className="ml-2" htmlFor="generated">Generated</label>
              </div>
            </div>
          </div>

          <div className='flex flex-col gap-4'>
            <div>
              <label className='text-4xl font-bold'>Hey,</label>
              <input
                className='border text-4xl font-bold ml-2 bg-transparent'
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <p>Time to change things up a little bit I see!</p>
          </div>
        </div>

        <div className='flex flex-col mt-4 bg-emerald-500 rounded-3xl p-4' id="roles-bar">
          <div className='flex gap-2 items-center'>
            <div className='flex items-center gap-1 bg-emerald-900 w-fit py-1 px-3 rounded-md '>
              <div className='h-4 w-4 bg-purple-500 rounded-full'></div>
              <label className='font-bold text-white cursor-pointer' htmlFor="fullstack">FullStack</label>
              <input className="ml-1 check cursor-pointer" type="checkbox" value="fullstack" id="fullstack"/>
            </div>
            <div className='flex items-center gap-1 bg-emerald-900 w-fit py-1 px-3 rounded-md'>
              <div className='h-4 w-4 bg-green-500 rounded-full'></div>
              <label className='font-bold text-white cursor-pointer' htmlFor="frontend">Front-End</label>
              <input className="ml-1 check cursor-pointer" type="checkbox" value="fronteend" id="frontend"/>
            </div>
            <div className='flex items-center gap-1 bg-emerald-900 w-fit py-1 px-3 rounded-md'>
              <div className='h-4 w-4 bg-blue-500 rounded-full'></div>
              <label className='font-bold text-white cursor-pointer' htmlFor="backend">Back-End</label>
              <input className="ml-1 check cursor-pointer" type="checkbox" value="backend" id="backend"/>
            </div>
            <div className='flex items-center gap-1 bg-emerald-900 w-fit py-1 px-3 rounded-md'>
              <div className='h-4 w-4 bg-yellow-500 rounded-full'></div>
              <label className='font-bold text-white cursor-pointer' htmlFor="pm">PM</label>
              <input className="ml-1 check cursor-pointer" type="checkbox" value="pm" id="pm"/>
            </div>
            <div className='flex items-center gap-1 bg-emerald-900 w-fit py-1 px-3 rounded-md'>
              <div className='h-4 w-4 bg-red-500 rounded-full'></div>
              <label className='font-bold text-white cursor-pointer' htmlFor="qatester">QA Tester</label>
              <input className="ml-1 check cursor-pointer" type="checkbox" value="qatester" id="qatester"/>
            </div>
            <div className='flex items-center gap-1 bg-emerald-900 w-fit py-1 px-3 rounded-md'>
              <div className='h-4 w-4 bg-pink-500 rounded-full'></div>
              <label className='font-bold text-white cursor-pointer' htmlFor="uxui">UX/UI</label>
              <input className="ml-1 check cursor-pointer" type="checkbox" value="uxui" id="uxui"/>
            </div>
            <div className='flex items-center gap-1 bg-emerald-900 w-fit py-1 px-3 rounded-md'>
              <div className='h-4 w-4 bg-black rounded-full'></div>
              <label className='font-bold text-white cursor-pointer' htmlFor="devops">DevOps</label>
              <input className="ml-1 check cursor-pointer" type="checkbox" value="devops" id="devops"/>
            </div>
            <span className='font-bold text-seashell-400 drop-shadow'>* Please Select up to 3 Roles *</span>
          </div>
        </div>

      </form>
    </div>
  )
}

