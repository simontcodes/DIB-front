"use client";

// import Image from "next/image";
// import Link from "next/link";

// TO GET THE SESSION AND USER FROM NEXT AUTH
// import { useSession } from "next-auth/react";
import { 
  useState, 
  // useEffect 
} from "react";
// import { UserData, SidebarData } from "types/interfaces";

import SideBar from "./sidebar";
import DashboardComponent from "./DashboardComponent";
import ProjectBoardComponent from "./ProjectBoardComponent";
import MembersComponent from "./MembersComponent";
import SettingsComponent from "./SettingsComponent";
import CurrentTeamComponent from "./CurrentTeamComponent";

// type PageProps = {
//   params: {
//     userId: string;
//   };
// };

export default function Dashboard() {
  // const { data: session } = useSession();
  // const [userData, setUserData] = useState<UserData>();
  // const [userId, setUserId] = useState();
  // const [userRoles, setUserRoles] = useState<string[]>([]);
  const [viewingDashboard, setViewingDashboard] = useState(true)
  const [viewingMembers, setViewingMembers] = useState(false)
  const [viewingTeam, setViewingTeam] = useState(false)
  const [viewingProjectBoard, setViewingProjectBoard] = useState(false)
  const [viewingProjectHistory, setViewingProjectHistory] = useState(false)
  const [viewingSettings, setViewingSettings] = useState(false)

  // const [sideBarData, setSideBarData] = useState<SidebarData>({name:"",email:""});

  // // FUNCTION TO FETCH USER
  // const fetchUser = async () => {
  //   const isAdmin = session?.user?.role?.includes("Admin");
  //   const res = await fetch(`http://localhost:8080/${isAdmin ? "admins" : "dibs"}/${session?.user?.id}`, {
  //       method: "GET",
  //       headers: {
  //         "Content-Type": "application/json",
  //         Authorization: `bearer ${session?.user?.token}`,
  //       },
  //     }
  //   );
  //   const data = await res.json();
  //   // setSideBarData(data);
  //   setSideBarData({
  //     name: data.name,
  //     email: data.email,
  //   });
  //   setUserId(data._id);
  //   if (typeof data.role === "string") {
  //     const roleToPush: string[] = [];
  //     roleToPush.push(data.role);
  //     setUserRoles(roleToPush);
  //   } else {
  //     setUserRoles(data.role);
  //   }
  //   setUserData(data);
  // };

  // // FUNCTION TO CREATE THE ROLE TAGS DEPENDING ON USER ROLES
  // const tokenSwitch = (roles: string | undefined, index: number) => {
  //   switch (roles) {
  //     case "Fullstack Developer":
  //       return (
  //         <div
  //           key={index}
  //           className="flex items-center gap-1 bg-emerald-900 w-fit py-1 px-3 rounded-md "
  //         >
  //           <div className="h-4 w-4 bg-purple-500 rounded-full"></div>
  //           <span className="font-bold text-white">FullStack</span>
  //         </div>
  //       );
  //     case "Frontend Developer":
  //       return (
  //         <div
  //           key={index}
  //           className="flex items-center gap-1 bg-emerald-900 w-fit py-1 px-3 rounded-md"
  //         >
  //           <div className="h-4 w-4 bg-green-500 rounded-full"></div>
  //           <span className="font-bold text-white">Front-End</span>
  //         </div>
  //       );
  //     case "Backend Developer":
  //       return (
  //         <div
  //           key={index}
  //           className="flex items-center gap-1 bg-emerald-900 w-fit py-1 px-3 rounded-md"
  //         >
  //           <div className="h-4 w-4 bg-blue-500 rounded-full"></div>
  //           <span className="font-bold text-white">Back-End</span>
  //         </div>
  //       );
  //     case "Project Manager":
  //       return (
  //         <div
  //           key={index}
  //           className="flex items-center gap-1 bg-emerald-900 w-fit py-1 px-3 rounded-md"
  //         >
  //           <div className="h-4 w-4 bg-yellow-500 rounded-full"></div>
  //           <span className="font-bold text-white">PM</span>
  //         </div>
  //       );
  //     case "QA Tester":
  //       return (
  //         <div
  //           key={index}
  //           className="flex items-center gap-1 bg-emerald-900 w-fit py-1 px-3 rounded-md"
  //         >
  //           <div className="h-4 w-4 bg-red-500 rounded-full"></div>
  //           <span className="font-bold text-white">QA Tester</span>
  //         </div>
  //       );
  //     case "UX/UI":
  //       return (
  //         <div
  //           key={index}
  //           className="flex items-center gap-1 bg-emerald-900 w-fit py-1 px-3 rounded-md"
  //         >
  //           <div className="h-4 w-4 bg-pink-500 rounded-full"></div>
  //           <span className="font-bold text-white">UX/UI</span>
  //         </div>
  //       );
  //     case "DevOps":
  //       return (
  //         <div
  //           key={index}
  //           className="flex items-center gap-1 bg-emerald-900 w-fit py-1 px-3 rounded-md"
  //         >
  //           <div className="h-4 w-4 bg-black rounded-full"></div>
  //           <span className="font-bold text-white">DevOps</span>
  //         </div>
  //       );
  //     case "Regular Admin":
  //       return (
  //         <div
  //           key={index}
  //           className="flex items-center gap-1 bg-orange-900 w-fit py-1 px-3 rounded-md"
  //         >
  //           <div className="h-4 w-4 bg-white rounded-full"></div>
  //           <span className="font-bold text-white">Admin</span>
  //         </div>
  //       );
  //     case "Super Admin":
  //       return (
  //         <div
  //           key={index}
  //           className="flex items-center gap-1 bg-orange-900 w-fit py-1 px-3 rounded-md"
  //         >
  //           <div className="h-4 w-4 bg-pink-400 rounded-full"></div>
  //           <span className="font-bold text-white">Super Admin</span>
  //         </div>
  //       );
  //   }
  // };

  // useEffect(() => {
  //   if(session) {
  //     fetchUser();
  //   }
  // }, [session]);

  // if (!userData) {
  //   return <p>Loading</p>;
  // }

  const handleViewing = (e: React.MouseEvent) => {
    // console.log(`Viewing ${e.currentTarget.textContent}`)
    if (e.currentTarget.textContent == 'Dashboard') setViewingDashboard(true); else setViewingDashboard(false)
    if (e.currentTarget.textContent == 'Members') setViewingMembers(true); else setViewingMembers(false)
    if (e.currentTarget.textContent == 'Team') setViewingTeam(true); else setViewingTeam(false)
    if (e.currentTarget.textContent == 'Project Board') setViewingProjectBoard(true); else setViewingProjectBoard(false)
    if (e.currentTarget.textContent == 'Project History') setViewingProjectHistory(true); else setViewingProjectHistory(false)
    if (e.currentTarget.textContent == 'Settings') setViewingSettings(true); else setViewingSettings(false)
  }

  return (
    <>
      <div className="w-full pt-16">
        {viewingDashboard?<DashboardComponent />:<></>}
        {viewingMembers?<MembersComponent />:<></>}
        {viewingTeam?<CurrentTeamComponent />:<></>}
        {viewingProjectBoard?<ProjectBoardComponent />:<></>}
        {viewingProjectHistory?<h1>Project History</h1>:<></>}
        {viewingSettings?<SettingsComponent />:<></>}
        {/* <DashboardComponent /> */}
        {/* <h1 className="text-4xl font-bold mb-8">Dashboard</h1>
        <div className="flex flex-col justify-center p-16 w-full h-48 relative bg-emerald-400 rounded-3xl">
          <div className="flex justify-center items-center absolute bottom-8 right-16 h-64 w-64 overflow-hidden rounded-full border-8 bg-emerald-600">
            <img
              className="w-full object-cover rounded-full"
              src={`https://api.dicebear.com/5.x/open-peeps/svg?seed=${userData?.name}&flip=true&translateX=5`}
              loading="lazy"
              alt="profile"
            />
          </div>
          <Link
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
          />
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
              userRoles.map((role, index) => tokenSwitch(role, index))
            )}
          </div>
        </div> */}
      </div>
      <SideBar 
      handleViewing={handleViewing} 
      viewingDashboard={viewingDashboard}
      viewingMembers={viewingMembers}
      viewingTeam={viewingTeam}
      viewingProjectBoard={viewingProjectBoard}
      viewingProjectHistory={viewingProjectHistory}
      viewingSettings={viewingSettings}
      />
    </>
  );
}
