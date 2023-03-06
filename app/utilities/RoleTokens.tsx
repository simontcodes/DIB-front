export const RoleTokens = (roles: string | undefined, index: number) => {
  // FUNCTION TO CREATE THE ROLE TAGS DEPENDING ON USER ROLES
  switch (roles) {
    case "Fullstack Developer":
      return (
        <div
          key={index}
          className="flex items-center gap-1 bg-emerald-900 w-fit py-1 px-3 rounded-md "
        >
          <div className="h-4 w-4 bg-purple-500 rounded-full"></div>
          <span className="font-bold text-white whitespace-nowrap">FullStack</span>
        </div>
      );
    case "Frontend Developer":
      return (
        <div
          key={index}
          className="flex items-center gap-1 bg-emerald-900 w-fit py-1 px-3 rounded-md"
        >
          <div className="h-4 w-4 bg-green-500 rounded-full"></div>
          <span className="font-bold text-white whitespace-nowrap">Front-End</span>
        </div>
      );
    case "Backend Developer":
      return (
        <div
          key={index}
          className="flex items-center gap-1 bg-emerald-900 w-fit py-1 px-3 rounded-md"
        >
          <div className="h-4 w-4 bg-blue-500 rounded-full"></div>
          <span className="font-bold text-white whitespace-nowrap">Back-End</span>
        </div>
      );
    case "Project Manager":
      return (
        <div
          key={index}
          className="flex items-center gap-1 bg-emerald-900 w-fit py-1 px-3 rounded-md"
        >
          <div className="h-4 w-4 bg-yellow-500 rounded-full"></div>
          <span className="font-bold text-white whitespace-nowrap">PM</span>
        </div>
      );
    case "QA Tester":
      return (
        <div
          key={index}
          className="flex items-center gap-1 bg-emerald-900 w-fit py-1 px-3 rounded-md"
        >
          <div className="h-4 w-4 bg-red-500 rounded-full"></div>
          <span className="font-bold text-white whitespace-nowrap">QA Tester</span>
        </div>
      );
    case "UX/UI":
      return (
        <div
          key={index}
          className="flex items-center gap-1 bg-emerald-900 w-fit py-1 px-3 rounded-md"
        >
          <div className="h-4 w-4 bg-pink-500 rounded-full"></div>
          <span className="font-bold text-white whitespace-nowrap">UX/UI</span>
        </div>
      );
    case "DevOps":
      return (
        <div
          key={index}
          className="flex items-center gap-1 bg-emerald-900 w-fit py-1 px-3 rounded-md"
        >
          <div className="h-4 w-4 bg-black rounded-full"></div>
          <span className="font-bold text-white whitespace-nowrap">DevOps</span>
        </div>
      );
    case "Regular Admin":
      return (
        <div
          key={index}
          className="flex items-center gap-1 bg-orange-900 w-fit py-1 px-3 rounded-md"
        >
          <div className="h-4 w-4 bg-white rounded-full"></div>
          <span className="font-bold text-white whitespace-nowrap">Admin</span>
        </div>
      );
    case "Super Admin":
      return (
        <div
          key={index}
          className="flex items-center gap-1 bg-orange-900 w-fit py-1 px-3 rounded-md"
        >
          <div className="h-4 w-4 bg-pink-400 rounded-full"></div>
          <span className="font-bold text-white whitespace-nowrap">Super Admin</span>
        </div>
      );
  }
}
