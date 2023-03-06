"use client";

import Image from "next/image";
import Link from "next/link";

// TO GET THE SESSION AND USER FROM NEXT AUTH
import { useSession } from "next-auth/react";
import { useState, useEffect } from "react";
import {RoleTokens} from "../../utilities/RoleTokens";

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
    console.log(data[0].role)
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
      <div className="flex flex-wrap justify-center gap-y-8 gap-x-4">
        {membersList.map((member) => 
        <div className="flex flex-col relative items-center w-[17rem] h-fit bg-gray-900 mt-10 rounded-2xl">
          <div className="flex flex-shrink-0 justify-center h-[8rem] w-full">
            <div className="absolute -top-10">
              <div className="flex justify-center relative">
                <div className="flex h-32 w-32 overflow-hidden rounded-full border-2 border-gray-900 bg-emerald-600">
                  <img
                    className="w-full object-cover rounded-full"
                    src={`https://api.dicebear.com/5.x/open-peeps/svg?seed=${member.name}&flip=true&translateX=5`}
                    loading="lazy"
                    alt="profile"
                  />
                </div>
                <span className="absolute -bottom-5 left-1/2 -translate-x-1/2 whitespace-nowrap py-1 px-2 border border-white text-white bg-[#232529] rounded-md">{member.name}</span>
              </div>
            </div>
          </div>
          {/* <div className="flex flex-wrap justify-center bg-[#232529] w-full rounded-b-xl p-4 gap-2">
            {member.role.length == 0 ? (
              <span className="text-white">No Roles Defined</span>
            ) : (
              member.role.map((role, index) => tokenSwitch(role, index))
            )}
          </div> */}
          <div className="flex flex-wrap justify-center bg-[#232529] w-full rounded-b-xl p-4 gap-2">
            {member.role.length == 0 ? (
              <span className="text-white">No Roles Defined</span>
            ) : (
              member.role.map((role, index) => 
                RoleTokens(role, index)
              )
            )}
          </div>
        </div>
        )}
      </div>
    </section>
  );
}
