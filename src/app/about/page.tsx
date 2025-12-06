import SectionHeading from '@/components/SectionHeading'

export default function About(){
  return (
    <section className="py-20 container">
      <SectionHeading title="About" />
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <p className="mb-4">Ishita Kapoor is an emerging leader and award-winning technologist. Her work spans accessible education technology, startup leadership, and research on disciplinary belonging in STEM.</p>
          <p>She has won Microsoft Imagine Cup (National Winner - Education), secured NIDHI EIR grant, and been featured in media for work on inclusive tech.</p>
        </div>
        <div>
          <h3 className="font-semibold mb-2">Work Experience</h3>
          <ul className="list-disc pl-6 text-sm text-gray-700">
            <li>Founder’s Office — Strategy & Growth Lead (Current)</li>
            <li>Founder — eDrishti (Accessible edtech)</li>
            <li>Research collaborator — University of Calgary, UBC</li>
          </ul>
        </div>
      </div>
    </section>
  )
}