import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

import Image from "next/image";

type Project = {
  company: string,
  logo: string,
  contactInfo: string,
  assignedTeam: string,
  rolesNeeded: [
    {role: string, quantity: number,}
  ],
  status: string
}

type TeamUpdateBody = {
  team: string | undefined,
}

export default function ProjectBoardComponent() {

  const { data:session } = useSession()

  const [projectData, setProjectData] = useState<Project[]>()

  const fetchProjects = async () => {
    const res = await fetch(`http://localhost:8080/projects`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `bearer ${session?.user?.token}`
      }
    });

    const data = await res.json()
    setProjectData(data)
  }

  // PATCH REQUEST TO UPDATE USER
  const updateUser = async (updateBody: TeamUpdateBody) => {
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

  const handleTeamUpdateSubmit =(teamId: string | undefined) => {
    // const updateBody = {team:teamId}
    // updateUser(updateBody)
    console.log(teamId)
  }

  useEffect(() => {
    fetchProjects()
  }, [])

  if (!projectData) {
    return (
      <h1>Loading</h1>
    )
  }    

  return (
    <section className="flex flex-col items-center px-8">
      <div className="mb-8">
        <h1 className="text-3xl">Current Ongoing Projects</h1>
      </div>
      <div className="flex justify-center w-full gap-4 flex-wrap">

        {projectData.map((project, index) => 
          <div className="flex flex-col rounded-xl w-[500px] h-[350px] bg-emerald-600 overflow-hidden" key={index}>
            <div className="top flex flex-col items-center justify-between bg-gray-800 p-4 flex-grow">
              <div className="w-[7rem] h-[7rem] bg-gray-400 rounded-xl overflow-hidden">
                {project.logo === undefined ? <></> 
                : <Image
                    className="object-cover h-full w-full"
                    src={`http://localhost:8080/${project.logo}`}
                    width={300}
                    height={300}
                    alt='company logo'
                  />
                }
              </div>
              <span className="font-bold text-white text-2xl" onClick={() => handleTeamUpdateSubmit(project.assignedTeam)}>{project.company}</span>
            </div>
            <div className="bottom flex flex-col gap-2 p-4 h-[45%]">
              <span className="font-bold text-white">Available Roles</span>
              <div className="flex flex-wrap w-full gap-1">
                {!project.rolesNeeded.length 
                  ? 'none needed' 
                  : project.rolesNeeded.map((role, index)=> 
                    <div 
                    className="flex bg-emerald-200 py-1 px-2 w-fit rounded uppercase text-xs font-bold items-center" 
                    key={index}
                    onClick={(e) => {console.log("Applying to", e.currentTarget.firstChild?.textContent)}}
                    >
                      <span className="mr-2">{role.role}</span>
                      <span className="flex w-5 h-5 justify-center items-center rounded-full bg-emerald-400">{role.quantity}</span>
                    </div>
                  )
                }
              </div>
            </div>
          </div>
        )}
        
      </div>
    </section>
  );
}