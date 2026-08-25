import { Hero } from '@/components/hero'
import { Projects } from '@/components/projects'
import { Experience } from '@/components/experience'
import { Education } from '@/components/education'
import { Skills } from '@/components/skills'
import { Contact } from '@/components/contact'

export default function Home() {
  return (
    <main id="main" tabIndex={-1}>
      <Hero />
      <Projects />
      <Experience />
      <Education />
      <Skills />
      <Contact />
    </main>
  )
}
