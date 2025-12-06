const services = [
  { title: 'Strategic advisory for early-stage founders', desc: "Leverage founder's office experience and ex-founder lessons to create GTM and scaling strategies." },
  { title: 'Leadership coaching & workshops', desc: 'Public speaking, leadership frameworks, and workshop delivery tied to executive presence.' },
  { title: 'Project consulting & case study breakdowns', desc: 'Deep dives into product decisions, metrics, and growth playbooks.' },
  { title: 'Keynote speaking for events', desc: 'Keynotes & panels with media clips and past engagements.' },
  { title: 'Mentorship programs', desc: 'Structured cohorts and 1:1 mentorship for founders and leaders.' }
]

export default function ServicesPreview(){
  return (
    <div className="grid md:grid-cols-2 gap-6">
      {services.map((s)=> (
        <div key={s.title} className="p-6 border rounded-lg bg-white">
          <h3 className="font-semibold mb-2">{s.title}</h3>
          <p className="text-sm text-gray-600">{s.desc}</p>
        </div>
      ))}
    </div>
  )
}