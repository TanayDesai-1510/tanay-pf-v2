import { experience } from '@/lib/data'
import { Section } from './ui/section'
import { Timeline, TimelineItem } from './ui/timeline'

export function Experience() {
  return (
    <Section id="experience" title="Experience">
      <Timeline>
        {experience.map((e) => (
          <TimelineItem key={e.org} title={e.org} subtitle={e.role} period={e.period} />
        ))}
      </Timeline>
    </Section>
  )
}
