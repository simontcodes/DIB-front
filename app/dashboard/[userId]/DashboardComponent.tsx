"use client";

// TO GET THE SESSION AND USER FROM NEXT AUTH
import { useSession } from "next-auth/react";
import { useState, useEffect } from "react";
import { UserData } from "types/interfaces";
import {RoleTokens} from "../../utilities/RoleTokens";

export default function DashboardComponent() {
  const { data: session } = useSession();
  const [userData, setUserData] = useState<UserData>();
  const [userId, setUserId] = useState();
  const [userRoles, setUserRoles] = useState<string[]>([]);

  // FUNCTION TO FETCH USER
  const fetchUser = async () => {
    const isAdmin = session?.user?.role?.includes("Admin");
    const res = await fetch(`http://localhost:8080/${isAdmin ? "admins" : "dibs"}/${session?.user?.id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `bearer ${session?.user?.token}`,
        },
      }
    );
    const data = await res.json();
    setUserId(data._id);
    if (typeof data.role === "string") {
      const roleToPush: string[] = [];
      roleToPush.push(data.role);
      setUserRoles(roleToPush);
    } else {
      setUserRoles(data.role);
    }
    setUserData(data);
  };

  // const reloadSession = () => {
  //   console.log("reloading")
  //   const event = new Event("visibilitychange");
  //   document.dispatchEvent(event);
  // };

  useEffect(() => {
    if(session) {
      fetchUser();
    }
  }, [session]);

  if (!userData) {
    return <p>Loading</p>;
  }

  return (
    <section className="px-8">
      <h1 className="text-4xl font-bold mb-8">Dashboard</h1>
      <div className="flex flex-col justify-center p-16 w-full h-48 relative bg-emerald-400 rounded-3xl">
        <div className="flex justify-center items-center absolute bottom-8 right-16 h-64 w-64 overflow-hidden rounded-full border-8 bg-emerald-600">
          <img
            className="w-full object-cover rounded-full"
            src={`https://api.dicebear.com/5.x/open-peeps/svg?seed=${userData?.name}&flip=true&translateX=5`}
            loading="lazy"
            alt="profile"
          />
        </div>
        {/* <Link
          className="absolute right-4 top-4 z-10 h-8 w-8"
          href={`/dashboard/${userId}/settings`}
        >
          <Image src="/settings.svg" alt="settings" width="32" height="32" />
        </Link>
        <Image
          className="absolute right-4 top-4"
          src="/settings.svg"
          alt="settings"
          width="32"
          height="32"
        /> */}
        <div className="flex flex-col gap-4">
          <span className="text-4xl font-bold">Hey, {userData?.name}</span>
          <p>How are you today? Ready to tackle some projects?</p>
        </div>
      </div>
      <div
        className="flex flex-col mt-4 bg-emerald-500 rounded-3xl p-4"
        id="roles-bar"
      >
        <div className="flex gap-2">
          {userRoles.length == 0 ? (
            <span className="bg-emerald-900 w-fit py-1 px-3 rounded-md text-white font-medium mx-auto">
              Please set your roles in settings
            </span>
          ) : (
            userRoles.map((role, index) => RoleTokens(role, index))
          )}
        </div>
      </div>
    </section>
  );
}
