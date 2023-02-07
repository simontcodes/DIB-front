'use client'

import React, { useState, useEffect } from 'react'

export default function ChangePreferences() {

  const [name, setName] = useState('')

  const maxChecked = 3

  const checkHowManyChecked = (e) => {
    const checked = document.querySelectorAll(".check:checked")
    const notChecked = document.querySelectorAll(".check:not(:checked)")
    console.log(checked, notChecked)
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
  },[])

  return (
    <form>
      <h1 className="text-4xl font-bold mb-8">Account Settings</h1>

      <div className='flex flex-col justify-center p-16 w-full h-48 relative bg-emerald-400 rounded-3xl'>
        <div className="flex flex-col absolute bottom-2 right-16 items-center">
          <div className='flex justify-center items-center h-64 w-64 overflow-hidden rounded-full border-8 bg-emerald-600'>
            {/* <img className='w-full object-cover rounded-full' src={`https://api.dicebear.com/5.x/open-peeps/svg?seed=${user.name}&flip=true&translateX=5`} loading="lazy" alt='profile' /> */}
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
            <span className='text-4xl font-bold'>Hey,</span>
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
        <div className='flex gap-2'>
          <div className='flex items-center gap-1 bg-emerald-900 w-fit py-1 px-3 rounded-md '>
            <div className='h-4 w-4 bg-purple-500 rounded-full'></div>
            <span className='font-bold text-white'>FullStack</span>
            <input className="ml-1 check" type="checkbox" value="fullstack" />
          </div>
          <div className='flex items-center gap-1 bg-emerald-900 w-fit py-1 px-3 rounded-md'>
            <div className='h-4 w-4 bg-green-500 rounded-full'></div>
            <span className='font-bold text-white'>Front-End</span>
            <input className="ml-1 check" type="checkbox" value="fronteend" />
          </div>
          <div className='flex items-center gap-1 bg-emerald-900 w-fit py-1 px-3 rounded-md'>
            <div className='h-4 w-4 bg-blue-500 rounded-full'></div>
            <span className='font-bold text-white'>Back-End</span>
            <input className="ml-1 check" type="checkbox" value="backend" />
          </div>
          <div className='flex items-center gap-1 bg-emerald-900 w-fit py-1 px-3 rounded-md'>
            <div className='h-4 w-4 bg-yellow-500 rounded-full'></div>
            <span className='font-bold text-white'>PM</span>
            <input className="ml-1 check" type="checkbox" value="pm" />
          </div>
          <div className='flex items-center gap-1 bg-emerald-900 w-fit py-1 px-3 rounded-md'>
            <div className='h-4 w-4 bg-red-500 rounded-full'></div>
            <span className='font-bold text-white'>QA Tester</span>
            <input className="ml-1 check" type="checkbox" value="qatester" />
          </div>
          <div className='flex items-center gap-1 bg-emerald-900 w-fit py-1 px-3 rounded-md'>
            <div className='h-4 w-4 bg-pink-500 rounded-full'></div>
            <span className='font-bold text-white'>UX/UI</span>
            <input className="ml-1 check" type="checkbox" value="uxui" />
          </div>
          <div className='flex items-center gap-1 bg-emerald-900 w-fit py-1 px-3 rounded-md'>
            <div className='h-4 w-4 bg-black rounded-full'></div>
            <span className='font-bold text-white'>DevOps</span>
            <input className="ml-1 check" type="checkbox" value="devops" />
          </div>
        </div>
      </div>







    </form>
  )
}