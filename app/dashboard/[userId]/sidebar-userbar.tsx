'use client'

import { useSession } from "next-auth/react"

export default function SideBarUserBar() {

  const { data: session } = useSession();

  return (
    <div className="pl-6 pr-4 py-4 bg-[#232529] flex items-center justify-between mt-auto">
      <div className="flex items-center">
        <div className="relative w-8 h-8 rounded-full before:absolute before:w-2 before:h-2 before:bg-green-500 before:rounded-full before:right-0 before:bottom-0 before:ring-1 before:ring-white bg-emerald-600">
          <img
            className="rounded-full"
            // src="https://avatars.githubusercontent.com/u/19399457?s=400&u=85e5bfae12dfb6ac040a98178bb35b84ec68d41a&v=4"
            src={`https://api.dicebear.com/5.x/open-peeps/svg?seed=${session?.user?.name}&flip=true&translateX=5`}
            alt="avatar"
          />
        </div>
        <div className="flex flex-col pl-3">
          <div className="text-sm text-gray-50">{session?.user?.name}</div>
          <span className="text-xs text-[#acacb0] font-light tracking-tight">
            {session?.user?.email}
          </span>
        </div>
      </div>
      <button className="text-gray-400 bg-gray-700 rounded focus:outline-none focus:ring-1 focus:ring-gray-500 focus:text-white">
        <svg
          className="w-4 h-4 stroke-current stroke-[1.5]"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            // stroke-linecap="round"
            // stroke-linejoin="round"
            d="M15.25 10.75L12 14.25L8.75 10.75"
          ></path>
        </svg>
      </button>
    </div>
  );
}
