import CreateProjectForm from "./CreateProjectForm";

export default function Projects() {
  
  return (
    <div className="w-full max-w-[1280px] pt-16">
      <h1 className="text-4xl font-bold mb-8">Create a Project</h1>

      <div className="flex justify-center">
        <CreateProjectForm />
      </div>
    </div>
  )
}