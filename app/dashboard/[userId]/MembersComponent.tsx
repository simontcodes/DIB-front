"use client";

import Image from "next/image";
import Link from "next/link";

// TO GET THE SESSION AND USER FROM NEXT AUTH
import { useSession } from "next-auth/react";
import { useState, useEffect } from "react";

type Member = {
  name: string,
  email: string,
  role: string[],
  _id: string,
}

export default function MembersComponent() {

  const { data: session } = useSession();

  const [membersList, setMembersList] = useState<Member[]>([])

  // FUNCTION TO FETCH USER
  const fetchMembers = async () => {
    // const isAdmin = session?.user?.role?.includes("Admin");
    const res = await fetch(`http://localhost:8080/dibs`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `bearer ${session?.user?.token}`,
        },
      }
    );
    const data = await res.json();
    setMembersList(data)
  };

  // FUNCTION TO CREATE THE ROLE TAGS DEPENDING ON USER ROLES
  const tokenSwitch = (roles: string | undefined, index: number) => {
    switch (roles) {
      case "Fullstack Developer":
        return (
          <div
            key={index}
            className="flex items-center gap-1 bg-emerald-900 w-fit py-1 px-3 rounded-md "
          >
            <div className="h-4 w-4 bg-purple-500 rounded-full"></div>
            <span className="font-bold text-white">FullStack</span>
          </div>
        );
      case "Frontend Developer":
        return (
          <div
            key={index}
            className="flex items-center gap-1 bg-emerald-900 w-fit py-1 px-3 rounded-md"
          >
            <div className="h-4 w-4 bg-green-500 rounded-full"></div>
            <span className="font-bold text-white">Front-End</span>
          </div>
        );
      case "Backend Developer":
        return (
          <div
            key={index}
            className="flex items-center gap-1 bg-emerald-900 w-fit py-1 px-3 rounded-md"
          >
            <div className="h-4 w-4 bg-blue-500 rounded-full"></div>
            <span className="font-bold text-white">Back-End</span>
          </div>
        );
      case "Project Manager":
        return (
          <div
            key={index}
            className="flex items-center gap-1 bg-emerald-900 w-fit py-1 px-3 rounded-md"
          >
            <div className="h-4 w-4 bg-yellow-500 rounded-full"></div>
            <span className="font-bold text-white">PM</span>
          </div>
        );
      case "QA Tester":
        return (
          <div
            key={index}
            className="flex items-center gap-1 bg-emerald-900 w-fit py-1 px-3 rounded-md"
          >
            <div className="h-4 w-4 bg-red-500 rounded-full"></div>
            <span className="font-bold text-white">QA Tester</span>
          </div>
        );
      case "UX/UI":
        return (
          <div
            key={index}
            className="flex items-center gap-1 bg-emerald-900 w-fit py-1 px-3 rounded-md"
          >
            <div className="h-4 w-4 bg-pink-500 rounded-full"></div>
            <span className="font-bold text-white">UX/UI</span>
          </div>
        );
      case "DevOps":
        return (
          <div
            key={index}
            className="flex items-center gap-1 bg-emerald-900 w-fit py-1 px-3 rounded-md"
          >
            <div className="h-4 w-4 bg-black rounded-full"></div>
            <span className="font-bold text-white">DevOps</span>
          </div>
        );
      case "Regular Admin":
        return (
          <div
            key={index}
            className="flex items-center gap-1 bg-orange-900 w-fit py-1 px-3 rounded-md"
          >
            <div className="h-4 w-4 bg-white rounded-full"></div>
            <span className="font-bold text-white">Admin</span>
          </div>
        );
      case "Super Admin":
        return (
          <div
            key={index}
            className="flex items-center gap-1 bg-orange-900 w-fit py-1 px-3 rounded-md"
          >
            <div className="h-4 w-4 bg-pink-400 rounded-full"></div>
            <span className="font-bold text-white">Super Admin</span>
          </div>
        );
    }
  };

  useEffect(() => {
    if(session) {
      fetchMembers();
    }
  }, [session]);

  // if (!userData) {
  //   return <p>Loading</p>;
  // }

  return (
    <section className="px-8">
      <h1 className="text-4xl font-bold mb-8">Members</h1>
      <div className="flex flex-wrap gap-y-8 gap-x-4">
        {membersList.map((member) => 
          <div className="relative">
            <div className="flex h-32 w-32 overflow-hidden rounded-full border-2 border-gray-900 bg-emerald-600">
              <img
                className="w-full object-cover rounded-full"
                src={`https://api.dicebear.com/5.x/open-peeps/svg?seed=${member.name}&flip=true&translateX=5`}
                loading="lazy"
                alt="profile"
              />
            </div>
            <span className="absolute -bottom-5 left-1/2 -translate-x-1/2 whitespace-nowrap py-1 px-2 border border-white text-white bg-gray-900 rounded-md">{member.name}</span>
          </div>
        )}
      </div>
    </section>
  );
}
