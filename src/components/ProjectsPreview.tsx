const projects = [
  { title: 'eDrishti', subtitle: 'Accessible STEM education for visually impaired learners', id: 'edrishti' },
  { title: 'Hear-It-Through', subtitle: 'Speech to Indian Sign Language translator', id: 'hear-it-through' }
]

export default function ProjectsPreview(){
  return (
    <div className="grid md:grid-cols-2 gap-6">
      {projects.map(p => (
        <article key={p.id} className="p-6 border rounded-lg bg-white">
          <h4 className="font-semibold mb-1">{p.title}</h4>
          <p className="text-sm text-gray-600">{p.subtitle}</p>
          <a href={`/projects/${p.id}`} className="mt-4 inline-block text-sm font-medium">Read case study →</a>
        </article>
      ))}
    </div>
  )
}