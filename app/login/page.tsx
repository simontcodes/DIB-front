'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Login() {

  const [ username, setUsername ] = useState('')
  const [ password, setPassword ] = useState('')

  const handleSubmitLogin = () => {
    console.log("clicked")
  }

  return (
    <div className="w-full max-w-[1280px]">

      <div className="flex justify-center">

        <div className="flex justify-center shadow-xl rounded-2xl overflow-hidden">
          <div className="flex flex-col justify-between w-[400px] h-[400px] p-8">
            <div className='h-[3rem] flex items-center'>
              <span className='text-3xl'>Sign in</span>
            </div>
            <form className='flex flex-col gap-4' onSubmit={handleSubmitLogin}>
              <div className='flex flex-col'>
                <label className='text-xs font-bold uppercase mb-1'>username</label>
                <input
                  className='text-md rounded-md p-3 bg-emerald-100'
                  type="text"
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div className='flex flex-col'>
                <label className='text-xs font-bold uppercase mb-1'>password</label>
                <input
                  className='text-md rounded-md p-3 bg-emerald-100'
                  type="text"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <button className='w-full p-3 bg-emerald-600 rounded-md'>Sign In</button>
              <div className='flex justify-between'>
                <div>
                  <input id="uploaded" type="checkbox" value="uploaded" name="avatar-type" />
                  <label className="ml-2" htmlFor="uploaded">Remember me?</label>
                </div>
                <div>
                  <Link href="/forgot-password">Forgot Password</Link>
                </div>
              </div>
            </form>
          </div>
          <div className="flex flex-col gap-3 justify-center items-center w-[400px] h-[400px] bg-emerald-600">
            <span className="text-3xl font-bold text-white">Welcome to Login</span>
            <span className="text-white">Don't have an account?</span>
            <button className="py-1 px-2 border border-white rounded bg-emerald-900 text-white">Sign Up</button>
          </div>
        </div>

      </div>

    </div>
  )
}