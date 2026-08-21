'use client'
import Image from 'next/image'
import { Reveal, StaggerGroup, StaggerItem } from './reveal'
import { Card } from './ui/card'
import { ProjectIcon } from './icons'
import { projects } from '@/lib/data'

export function Projects() {
  return (
    <section id="work" className="border-t border-border py-[clamp(2.4rem,6vh,3.8rem)]">
      <div className="mx-auto max-w-site px-[clamp(18px,5vw,24px)]">
        <Reveal>
          <h2 className="mb-6 text-[clamp(1.35rem,3vw,1.85rem)] font-semibold tracking-[-.02em]">Projects</h2>
        </Reveal>
        <StaggerGroup className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <StaggerItem key={p.id}>
              <a href={p.href ?? '#'} className="group block h-full">
                <Card className="h-full transition-[transform,border-color] duration-300 group-hover:-translate-y-1.5 group-hover:border-input">
                  <div className="relative flex aspect-[16/10] items-center justify-center overflow-hidden border-b border-border bg-gradient-to-br from-card to-background text-faint">
                    {p.image ? (
                      <Image src={p.image} alt={p.name} fill className="object-contain p-3 transition-transform duration-300 group-hover:scale-105" sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw" />
                    ) : (
                      <ProjectIcon name={p.icon} />
                    )}
                  </div>
                  <div className="p-4 pb-[18px]">
                    <p className="mb-1.5 text-[11px] font-semibold uppercase tracking-[.04em] text-faint">{p.kicker}</p>
                    <h3 className="mb-1.5 flex items-center justify-between text-[1.1rem] font-semibold tracking-[-.01em]">
                      {p.name}
                      <span className="text-faint transition-[transform,color] duration-300 group-hover:translate-x-[3px] group-hover:-translate-y-[3px] group-hover:text-foreground">↗</span>
                    </h3>
                    <p className="mb-3 text-[.87rem] leading-[1.5] text-muted-foreground">{p.blurb}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {p.tags.map((t) => (
                        <span key={t} className="rounded-md border border-border px-2 py-[3px] text-[11px] text-muted-foreground">{t}</span>
                      ))}
                    </div>
                  </div>
                </Card>
              </a>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  )
}
