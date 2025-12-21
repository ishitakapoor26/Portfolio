"use client";
import Hero from '@/components/Hero'
import About from '@/app/about/page'
import WorkExperience from '@/components/WorkExperience'
import {workExperience} from '@/data/workExp'
import {successData} from '@/data/success'
import {projects} from '@/data/projects'
import {services} from '@/data/services'
import {testimonials} from '@/data/testimonials'
import {mediaGallery} from '@/data/media'
import SuccessStories from './success/page'
import Projects from '@/app/projects/page'
import Testimonials from '@/components/Testimonial'
import HonoredBy from '@/components/HonoredBy';
import {honoredBy} from '@/data/honoredby';
import {latestItems} from "@/data/latest";
import LatestSection from './latest/page';
import ServicesContact from './services/page';
import MediaSection from './media/page';
import LeadMagnet from '@/components/LeadMagnet';

export default function Home(){
  return (
    <div>
      <Hero />
      <LeadMagnet/>
      <About/>
      <HonoredBy data ={honoredBy}/>
      <WorkExperience data={workExperience}/>
      <SuccessStories data={successData}/>
      <ServicesContact services={services}/>
      <Projects projects={projects}/>
      <LatestSection data={latestItems}/>
      <Testimonials data={testimonials}/>
      <MediaSection data={mediaGallery}/>
    </div>
  )
}