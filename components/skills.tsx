import { skills } from '@/lib/data'
import { Badge } from './ui/badge'
import { LabeledRow } from './ui/labeled-row'
import { Section } from './ui/section'

export function Skills() {
  return (
    <Section id="skills" title="Skills">
      <div className="flex flex-col gap-5">
        {skills.map((g) => (
          <LabeledRow key={g.group} label={g.group}>
            <div className="flex flex-wrap gap-2">
              {g.items.map((s) => (
                <Badge key={s} variant="chip">
                  {s}
                </Badge>
              ))}
            </div>
          </LabeledRow>
        ))}
      </div>
    </Section>
  )
}
