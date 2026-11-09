import type { ReactNode } from 'react'
import { ArrowUpRight01Icon } from '@hugeicons/core-free-icons'
import { Icon } from './icon'
import { ProjectCarousel, type CarouselSlide } from './project-carousel'
import { Heading } from './ui/heading'
import { Kicker } from './ui/kicker'
import { Section } from './ui/section'
import { TextLink } from './ui/text-link'

const body = 'max-w-[60ch] text-pretty text-base leading-relaxed text-muted-foreground'

const slides: CarouselSlide[] = [
  {
    id: 'quotaforge',
    image: '/projects/quotaforge.webp',
    alt: 'Screenshot of the QuotaForge dashboard listing three tenants, each with a request limit, a 60-second window, and a usage bar.',
    kicker: 'Distributed systems',
    title: 'QuotaForge',
    caption:
      'The QuotaForge dashboard, where each tenant gets its own request limit and time window. Behind it, atomic Redis Lua scripts keep those limits correct when many requests arrive at once.',
  },
  {
    id: 'signalwatch',
    image: '/projects/signalwatch.webp',
    alt: 'Screenshot of the SignalWatch landing page with the headline "Don\'t wait for the news. Watch the source."',
    kicker: 'AI + full-stack',
    title: 'SignalWatch',
    caption:
      'The SignalWatch landing page. The app watches BSE and NSE corporate announcements, uses Claude to summarize and score them, and delivers the important ones through email alerts and live server-sent events.',
  },
  {
    id: 'routemesh',
    image: '/projects/routemesh.webp',
    alt: 'Screenshot of the RouteMesh operator console showing registered services, active routes, instance health, and a runtime mesh graph.',
    kicker: 'Platform',
    title: 'RouteMesh',
    caption:
      'The RouteMesh operator console, with registered services, active routes, instance health, and the live runtime mesh. The gateway routes around unhealthy instances using circuit breakers, retries, and timeouts.',
  },
]

const transcript = [
  "Hi, I'm Tanay. I'm a computer science student at Rutgers University, and I enjoy building software that solves interesting technical problems.",
  'I am particularly interested in backend engineering, distributed systems, and understanding how applications behave as they grow.',
  'Projects like QuotaForge, SignalWatch, and RouteMesh have given me opportunities to explore challenges involving reliability, performance, and real-time systems.',
  "This portfolio brings together some of the work I've done, the technologies I've explored, and the things I've learned along the way.",
]

function MediaBlock({
  label,
  title,
  children,
}: {
  label: string
  title: string
  children: ReactNode
}) {
  return (
    <div className="border-t border-border py-section last:pb-0">
      <div className="grid gap-5 sm:grid-cols-[minmax(0,180px)_1fr] sm:gap-8">
        <Kicker>{label}</Kicker>
        <div className="min-w-0">
          <Heading as="h3" size="lg" className="mb-3">
            {title}
          </Heading>
          {children}
        </div>
      </div>
    </div>
  )
}

export function InsideTheBuild() {
  return (
    <Section
      id="inside-the-build"
      title="Inside the build"
      description="A closer look at my projects, an idea that shapes how I build them, and a short spoken introduction."
    >
      <MediaBlock label="Project gallery" title="Three projects, three kinds of problems">
        <p className={body}>
          Each of these projects deals with a different way software behaves under pressure:
          keeping limits fair when requests arrive at the same time, turning a flood of filings
          into a few useful signals, and keeping traffic moving when a service fails. Together
          they reflect what I enjoy most: backend systems where correctness, reliability, and
          visibility matter.
        </p>
        <div className="mt-6">
          <ProjectCarousel slides={slides} label="Project screenshots" />
        </div>
      </MediaBlock>

      <MediaBlock label="Watch" title="Why one server isn't enough">
        <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-border">
          <div className="relative aspect-video">
            <iframe
              src="https://www.youtube.com/embed/CESKgdNiKJw?rel=0"
              title="Explaining Distributed Systems Like I'm 5, published by HashiCorp on YouTube"
              loading="lazy"
              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="absolute inset-0 size-full"
            />
          </div>
        </div>
        <p className="mt-3 text-meta text-faint">
          &ldquo;Explaining Distributed Systems Like I&apos;m 5&rdquo; &middot; HashiCorp on
          YouTube
        </p>
        <div className="mt-5 grid gap-4">
          <p className={body}>
            This talk uses an ice cream truck analogy to show why a single API server struggles
            under heavy load, and how spreading the work across many trucks, each with its own
            queue and waiters, lets a system keep up with demand.
          </p>
          <p className={body}>
            I like it because it makes the core idea behind distributed systems easy to hold in
            your head. The same questions show up in my own work: QuotaForge has to
            keep many instances agreeing on one count, and RouteMesh has to decide where traffic
            goes when part of the system is slow or unavailable. Seeing the problem explained this
            simply is a good reminder that scalable, reliable applications start with a clear
            picture of where the work goes.
          </p>
        </div>
        <TextLink
          href="https://www.youtube.com/watch?v=CESKgdNiKJw"
          target="_blank"
          rel="noopener noreferrer"
          variant="footer"
          className="-ml-2 mt-2 gap-1.5 text-sm text-muted-foreground"
        >
          Watch on YouTube
          <Icon icon={ArrowUpRight01Icon} />
        </TextLink>
      </MediaBlock>

      <MediaBlock label="Listen" title="A short introduction">
        <p className={body}>
          A spoken introduction, under 40 seconds, to who I am and what I like to build, for
          anyone who would rather listen than read. The narration uses a synthetic text-to-speech voice
          (Piper, with its public-domain LJSpeech voice) reading a script I wrote. It is not a
          recording of my own voice.
        </p>
        <div className="mt-6 rounded-2xl border border-border bg-card p-3 shadow-border sm:p-4">
          <audio controls preload="metadata" className="w-full" aria-label="Spoken introduction by Tanay Desai, synthetic voice">
            <source src="/media/intro-narration.mp3" type="audio/mpeg" />
            Your browser can&apos;t play this audio.{' '}
            <a href="/media/intro-narration.mp3">Download the MP3</a> instead.
          </audio>
        </div>
        <div className="mt-6">
          <Kicker className="mb-3">Transcript</Kicker>
          <div className="grid gap-3 border-l border-border pl-4">
            {transcript.map((line) => (
              <p key={line} className={body}>
                {line}
              </p>
            ))}
          </div>
        </div>
      </MediaBlock>
    </Section>
  )
}
