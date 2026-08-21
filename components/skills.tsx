'use client'
import { Reveal, StaggerGroup, StaggerItem } from './reveal'
import { skills } from '@/lib/data'

export function Skills() {
  return (
    <section id="skills" className="border-t border-border py-[clamp(2.4rem,6vh,3.8rem)]">
      <div className="mx-auto max-w-site px-[clamp(18px,5vw,24px)]">
        <Reveal>
          <h2 className="mb-6 text-[clamp(1.35rem,3vw,1.85rem)] font-semibold tracking-[-.02em]">Skills</h2>
        </Reveal>
        <StaggerGroup className="flex flex-col gap-5">
          {skills.map((g) => (
            <StaggerItem key={g.group}>
              <div className="grid grid-cols-1 items-start gap-2 sm:grid-cols-[140px_1fr] sm:gap-4">
                <span className="pt-[3px] text-[13px] text-faint">{g.group}</span>
                <div className="flex flex-wrap gap-2">
                  {g.items.map((s) => (
                    <span key={s} className="rounded-full border border-input px-3 py-[5px] text-[13px] text-foreground transition-colors hover:border-foreground">{s}</span>
                  ))}
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  )
}
