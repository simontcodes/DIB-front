'use client'

import { useRouter } from "next/navigation"

import { useSession } from "next-auth/react"
import { useState, useEffect } from "react"
import { User } from 'types/interfaces'

type updateBody = {
  name: string,
  role: string[] | undefined[],
}

type selectedRolesObject = {
  "Fullstack Developer": boolean,
  "Frontend Developer": boolean,
  "Backend Developer": boolean,
  "Project Manager": boolean,
  "QA Tester": boolean,
  "UX/UI": boolean,
  "DevOps": boolean,
}

// export default async function Settings(props: PageProps) {
export default function Settings() {

  const { data: session } = useSession()
  const router = useRouter()

  const [ userData, setUserData ] = useState<User>()

  // AUTO FILL FORM
  const [ name, setName ] = useState('')

  const [ fullstack, setFullstack ] = useState(false)
  const [ frontend, setFrontend ] = useState(false)
  const [ backend, setBackend ] = useState(false)
  const [ pm, setPm ] = useState(false)
  const [ qatester, setQatester ] = useState(false)
  const [ uxui, setUxui ] = useState(false)
  const [ devops, setDevops ] = useState(false)

  // GET REQUEST TO FETCH USER TO PREFILL FORM
  const fetchUser = async () => {
    const res = await fetch(`http://localhost:8080/dibs/${session?.user?.id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `bearer ${session?.user?.token}`
      }
    });
    const data = await res.json()
    setUserData(data)
    setName(data.name)
    setRoles(data.role)
  }

  // PATCH REQUEST TO UPDATE USER
  const updateUser = async (updateBody: updateBody) => {
    const res = await fetch(`http://localhost:8080/dibs/${session?.user?.id}`, {
      method: "PATCH",
      body: JSON.stringify(updateBody),
      headers: {
        "Content-Type": "application/json",
        Authorization: `bearer ${session?.user?.token}`
      }
    })
    console.log(res)
  }

  // PRECHECK CHECKBOXES IN FORM DEPENDING ON USERS ROLES
  const setRoles = (roles:string[]) => {
    roles.forEach(role => {
      switch(role) {
        case "Fullstack Developer": setFullstack(true); break
        case "Frontend Developer": setFrontend(true); break
        case "Backend Developer": setBackend(true); break
        case "Project Manager": setPm(true); break
        case "QA Tester": setQatester(true); break
        case "UX/UI": setUxui(true); break
        case "DevOps": setDevops(true); break
      }
    });
  }

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

  // GET ROLE DEPENDING ON BOOLEAN VALUE
  const getKeyByValue = (object:selectedRolesObject, value:boolean) => {
    return Object.keys(object).filter(key => object[key as keyof selectedRolesObject] === value)
  }

  // FORM SUBMIT FUNCTION
  const handlePreferenceSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const selectedRoles = {
      "Fullstack Developer":fullstack,
      "Frontend Developer":frontend,
      "Backend Developer":backend,
      "Project Manager":pm,
      "QA Tester":qatester,
      "UX/UI":uxui,
      "DevOps":devops,
    }

    const body = {
      name : name,
      role : getKeyByValue(selectedRoles, true)
    }

    updateUser(body)
    router.push(`/dashboard/${session?.user?.id}`)
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
    <div className="w-full max-w-[1280px] pt-16">
      {/* <ChangePreferences user={userData}/> */}
      <form onSubmit={handlePreferenceSubmit}>
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
              <input className="ml-1 check cursor-pointer" type="checkbox" value="fullstack" id="fullstack" defaultChecked={fullstack} onChange={() => {setFullstack(!fullstack)}}/>
            </div>
            <div className='flex items-center gap-1 bg-emerald-900 w-fit py-1 px-3 rounded-md'>
              <div className='h-4 w-4 bg-green-500 rounded-full'></div>
              <label className='font-bold text-white cursor-pointer' htmlFor="frontend">Front-End</label>
              <input className="ml-1 check cursor-pointer" type="checkbox" value="fronteend" id="frontend" defaultChecked={frontend} onChange={() => {setFrontend(!frontend)}}/>
            </div>
            <div className='flex items-center gap-1 bg-emerald-900 w-fit py-1 px-3 rounded-md'>
              <div className='h-4 w-4 bg-blue-500 rounded-full'></div>
              <label className='font-bold text-white cursor-pointer' htmlFor="backend">Back-End</label>
              <input className="ml-1 check cursor-pointer" type="checkbox" value="backend" id="backend" defaultChecked={backend} onChange={() => {setBackend(!backend)}}/>
            </div>
            <div className='flex items-center gap-1 bg-emerald-900 w-fit py-1 px-3 rounded-md'>
              <div className='h-4 w-4 bg-yellow-500 rounded-full'></div>
              <label className='font-bold text-white cursor-pointer' htmlFor="pm">PM</label>
              <input className="ml-1 check cursor-pointer" type="checkbox" value="pm" id="pm" defaultChecked={pm} onChange={() => {setPm(!pm)}}/>
            </div>
            <div className='flex items-center gap-1 bg-emerald-900 w-fit py-1 px-3 rounded-md'>
              <div className='h-4 w-4 bg-red-500 rounded-full'></div>
              <label className='font-bold text-white cursor-pointer' htmlFor="qatester">QA Tester</label>
              <input className="ml-1 check cursor-pointer" type="checkbox" value="qatester" id="qatester" defaultChecked={qatester} onChange={() => {setQatester(!qatester)}}/>
            </div>
            <div className='flex items-center gap-1 bg-emerald-900 w-fit py-1 px-3 rounded-md'>
              <div className='h-4 w-4 bg-pink-500 rounded-full'></div>
              <label className='font-bold text-white cursor-pointer' htmlFor="uxui">UX/UI</label>
              <input className="ml-1 check cursor-pointer" type="checkbox" value="uxui" id="uxui" defaultChecked={uxui} onChange={() => {setUxui(!uxui)}}/>
            </div>
            <div className='flex items-center gap-1 bg-emerald-900 w-fit py-1 px-3 rounded-md'>
              <div className='h-4 w-4 bg-black rounded-full'></div>
              <label className='font-bold text-white cursor-pointer' htmlFor="devops">DevOps</label>
              <input className="ml-1 check cursor-pointer" type="checkbox" value="devops" id="devops" defaultChecked={devops} onChange={() => {setDevops(!devops)}}/>
            </div>
            <span className='font-bold text-seashell-400 drop-shadow'>* Please Select up to 3 Roles *</span>
          </div>
        </div>

        <div className="mt-4">
          <button className='px-2 py-1 rounded bg-emerald-600 text-white'>Save Settings</button>
        </div>

      </form>
    </div>
  )
}

