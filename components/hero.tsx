'use client'
import { Reveal } from './reveal'
import { CopyEmail } from './copy-email'
import { Button } from './ui/button'
import { profile } from '@/lib/data'

export function Hero() {
  return (
    <section id="hero" className="py-[clamp(4rem,12vh,8rem)] pb-[clamp(2.5rem,6vh,4.5rem)]">
      <div className="mx-auto max-w-site px-[clamp(18px,5vw,24px)]">
        <Reveal>
          <h1 className="m-0 max-w-[20ch] text-[clamp(1.9rem,5.4vw,3.6rem)] font-medium leading-[1.15] tracking-[-.02em]">
            Hi, I&apos;m Tanay. A software engineer who builds{' '}
            <span className="font-serif italic font-normal">fast, reliable systems</span>{' '}
            and the interfaces that live on top of them.
          </h1>
        </Reveal>
        <Reveal delay={0.12} className="mt-8 flex flex-wrap items-center gap-3">
          <Button asChild><a href={profile.resume} target="_blank" rel="noopener noreferrer">Resume</a></Button>
          <Button variant="outline" asChild>
            <span><CopyEmail label="Copy email" /></span>
          </Button>
        </Reveal>
      </div>
    </section>
  )
}
