import { Section } from './ui/section'
import { ProjectCard } from './project-card'
import { projects } from '@/lib/data'

export function Projects() {
  return (
    <Section id="work" title="Projects">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <ProjectCard key={p.id} project={p} />
        ))}
      </div>
    </Section>
  )
}
