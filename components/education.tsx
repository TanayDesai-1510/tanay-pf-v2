import { education } from '@/lib/data'
import { Section } from './ui/section'
import { Timeline, TimelineItem } from './ui/timeline'

export function Education() {
  return (
    <Section id="education" title="Education">
      <Timeline>
        {education.map((e) => (
          <TimelineItem key={e.school} title={e.school} subtitle={e.degree} period={e.period} />
        ))}
      </Timeline>
    </Section>
  )
}
