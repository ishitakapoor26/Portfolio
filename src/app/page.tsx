import Hero from '@/components/Hero'
import SectionHeading from '@/components/SectionHeading'
import ServicesPreview from '@/components/ServicesPreview'
import ProjectsPreview from '@/components/ProjectsPreview'

export default function Home(){
  return (
    <div>
      <Hero />

      <section className="py-12 bg-white">
        <div className="container">
          <SectionHeading title="About" />
          <p className="max-w-3xl">Ishita Kapoor is an emerging global leader, innovator, and award-winning technologist recognized for creating high-impact solutions in accessibility, education, and technology. She combines leadership, strategy and entrepreneurship to drive change — winner of Microsoft Imagine Cup (Education category) and NIDHI EIR grant awardee.</p>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="container">
          <SectionHeading title="Services" />
          <ServicesPreview />
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="container">
          <SectionHeading title="Projects & Case Studies" />
          <ProjectsPreview />
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="container">
          <SectionHeading title="Articles & Publications" />
          <p className="max-w-3xl">Featured research and long-form articles on accessible STEM education, leadership, and inclusive tech — each article uses MDX for rich content and SEO.</p>
        </div>
      </section>

    </div>
  )
}