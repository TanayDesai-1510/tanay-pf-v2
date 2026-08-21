'use client'
import { Reveal, StaggerGroup, StaggerItem } from './reveal'
import { experience } from '@/lib/data'

export function Experience() {
  return (
    <section id="experience" className="border-t border-border py-[clamp(2.4rem,6vh,3.8rem)]">
      <div className="mx-auto max-w-site px-[clamp(18px,5vw,24px)]">
        <Reveal>
          <h2 className="mb-6 text-[clamp(1.35rem,3vw,1.85rem)] font-semibold tracking-[-.02em]">Experience</h2>
        </Reveal>
        <StaggerGroup className="flex flex-col">
          {experience.map((e) => (
            <StaggerItem key={e.org}>
              <div className="flex flex-col gap-1 border-b border-border py-[15px] transition-[padding] duration-300 hover:pl-2 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-0.5">
                  <span className="text-base font-semibold">{e.org}</span>
                  <span className="text-sm text-muted-foreground">{e.role}</span>
                </div>
                <span className="shrink-0 text-[13px] text-faint">{e.period}</span>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  )
}
