import { createAvatar } from '@dicebear/core';
import * as peeps from '@dicebear/open-peeps';

const username = "Schubert Kulminko"

const mockUser = {
  name: "Schubert Kulminko",
  roles: [true, true, true, true, true, true, true]
}

const genAvatar = () => {
  const avatar = createAvatar(peeps, {
    seed: username,
    flip: true,
    translateX: 5,
  });
  return avatar.toDataUriSync();
}

export default function Dashboard() {

  return (
    <div className="w-full max-w-[1280px]">
      <h1 className="text-4xl font-bold mb-8">Dashboard</h1>

      <div className='flex flex-col justify-center p-16 w-full h-48 relative bg-emerald-400 rounded-3xl'>
        <div className='flex justify-center items-center absolute bottom-8 right-16 h-64 w-64 overflow-hidden rounded-full border-8 bg-emerald-600'>
          <img className='w-full object-cover rounded-full' src={genAvatar()} loading="lazy"/>
        </div>
        <div className='flex flex-col gap-4'>
          <span className='text-4xl font-bold'>Hey, {username}</span>
          <p>How are you today? Ready to tackle some projects?</p>
        </div>
      </div>

      <div className='flex flex-col mt-4 bg-emerald-500 rounded-3xl p-4'>
        <div className='flex gap-2'>
          <div className='flex items-center gap-1 bg-emerald-900 w-fit py-1 px-3 rounded-md '>
            <div className='h-4 w-4 bg-purple-500 rounded-full'></div>
            <span className='font-bold text-white'>FullStack</span>
          </div>
          <div className='flex items-center gap-1 bg-emerald-900 w-fit py-1 px-3 rounded-md'>
            <div className='h-4 w-4 bg-green-500 rounded-full'></div>
            <span className='font-bold text-white'>Front-End</span>
          </div>
          <div className='flex items-center gap-1 bg-emerald-900 w-fit py-1 px-3 rounded-md'>
            <div className='h-4 w-4 bg-blue-500 rounded-full'></div>
            <span className='font-bold text-white'>Back-End</span>
          </div>
          <div className='flex items-center gap-1 bg-emerald-900 w-fit py-1 px-3 rounded-md'>
            <div className='h-4 w-4 bg-yellow-500 rounded-full'></div>
            <span className='font-bold text-white'>PM</span>
          </div>
          <div className='flex items-center gap-1 bg-emerald-900 w-fit py-1 px-3 rounded-md'>
            <div className='h-4 w-4 bg-red-500 rounded-full'></div>
            <span className='font-bold text-white'>QA Tester</span>
          </div>
          <div className='flex items-center gap-1 bg-emerald-900 w-fit py-1 px-3 rounded-md'>
            <div className='h-4 w-4 bg-pink-500 rounded-full'></div>
            <span className='font-bold text-white'>UX/UI</span>
          </div>
          <div className='flex items-center gap-1 bg-emerald-900 w-fit py-1 px-3 rounded-md'>
            <div className='h-4 w-4 bg-black rounded-full'></div>
            <span className='font-bold text-white'>DevOps</span>
          </div>
        </div>
      </div>

      
      
    </div>
  )
}