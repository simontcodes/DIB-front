export default function ShowcasePage() {

  const completedProjects = [1, 2, 3, 4, 5, 6]
  const ongoingProjects = [7, 8, 9, 10]

  // https://source.unsplash.com/960x540/?landscape

  return (
    <div className="w-full max-w-[1280px] pt-16">
      <h1 className="text-4xl font-bold mb-8">Projects</h1>

      <section className="w-full mb-8">
        <h2 className="text-3xl">Completed</h2>
        <div className="flex flex-col gap-4 py-4">
          {completedProjects.map((number) => (
            <div className="grid grid-cols-[300px_minmax(400px,_1fr)] gap-4">
              <div className="rounded-lg h-32 w-full bg-gray-200 overflow-hidden">
                <img src={`https://source.unsplash.com/random/960x540/?img=${number}`} loading="lazy" alt={`project ${number}`}/>
              </div>
              <div className="p-4 rounded-lg h-32 w-full bg-gray-200"><span className="font-bold">Project {number} Description: </span>
              Nullam bibendum nibh non massa tincidunt imperdiet. Phasellus a aliquam est. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam a interdum tortor. Aliquam erat volutpat. In ut malesuada mauris, ut maximus urna.</div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-3xl">Ongoing</h2>
        <div className="flex flex-col gap-4 py-4">
          {ongoingProjects.map((number) => (
            <div className="grid grid-cols-[300px_minmax(400px,_1fr)] gap-4">
              <div className="rounded-lg h-32 w-full bg-gray-200 overflow-hidden">
                <img src={`https://source.unsplash.com/random/960x540/?img=${number}`} loading="lazy" alt={`project ${number}`}/>
              </div>
              <div className="p-4 rounded-lg h-32 w-full bg-gray-200"><span className="font-bold">Project {number} Description: </span>
              Nullam bibendum nibh non massa tincidunt imperdiet. Phasellus a aliquam est. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam a interdum tortor. Aliquam erat volutpat. In ut malesuada mauris, ut maximus urna.</div>
            </div>
          ))}
        </div>
      </section>
      
    </div>
  )
}