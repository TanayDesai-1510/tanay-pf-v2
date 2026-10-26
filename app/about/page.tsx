import type { Metadata } from 'next'
import Link from 'next/link'
import { CopyEmail } from '@/components/copy-email'
import { ProfilePhoto } from '@/components/profile-photo'
import { Projects } from '@/components/projects'
import { buttonVariants } from '@/components/ui/button'
import { Container } from '@/components/ui/container'
import { DetailSection } from '@/components/ui/detail-section'
import { Heading } from '@/components/ui/heading'
import { Kicker } from '@/components/ui/kicker'
import { Timeline, TimelineItem } from '@/components/ui/timeline'
import { education, experience, profile } from '@/lib/data'

export const metadata: Metadata = {
  title: 'About',
  description:
    'Tanay Desai is a computer science student at Rutgers and a software engineer focused on backend engineering, distributed systems, and reliable infrastructure.',
  alternates: { canonical: '/about' },
}

const body = 'max-w-[60ch] text-pretty text-base leading-relaxed text-muted-foreground'

const experienceNotes: Record<string, string[]> = {
  'Rutgers OIT': [
    'At Rutgers\' Office of Information Technology, I work with a cross-functional team modernizing the university\'s central web portal, which more than 70,000 students, faculty, and staff use every day. I build and migrate features onto a React, Redux, and TypeScript architecture, and I\'ve designed more than eight reusable components that are now shared across several internal applications.',
    'Working at that scale changed how I think about small decisions. A component used on one page is a detail; a component used across many applications is a contract. Improving the accessibility of shared components for students who use assistive technology, and refactoring Redux data flows to fix recurring state bugs, showed me that reliability is something users feel directly, not only something measured on a server.',
  ],
  'Vertex Inc.': [
    'At Vertex, I spent the summer of 2026 on the backend, working in distributed Java and Spring Boot microservices. I remediated 18 security vulnerabilities, including a critical improper-authentication flaw, by upgrading dependencies and validating the fixes across a multi-repository Gradle build. I also patched a soft-delete bypass that let deleted records leak into downstream flows, fixed a production data-integrity bug caused by a write that was missing across related records, and migrated AWS S3 buckets to standalone Terraform lifecycle, versioning, and CORS resources.',
    'The common thread was that the hardest problems rarely lived in a single line of code. They sat between services, between related records, and between what the configuration said and what actually ran in production.',
  ],
  SkillsVista: [
    'My first internship was on the front end at SkillsVista, during the summer of 2022, while I was still completing my diploma.',
  ],
}

const interests = [
  {
    title: 'Correctness under concurrency',
    text: 'I like problems where many requests arrive at once and the answer still has to be right. In QuotaForge, per-tenant quotas are enforced with atomic Redis Lua scripts, and usage is metered through an idempotent pipeline so nothing is counted twice.',
  },
  {
    title: 'Systems that fail gracefully',
    text: 'Services go down, so I want the system around them to keep working. RouteMesh uses circuit breakers, bounded retries, timeouts, and last-known-good configuration caches to stay available when a downstream service or its own control plane has trouble.',
  },
  {
    title: 'Performance you can see',
    text: 'I\'d rather measure than guess. My backend projects are instrumented with OpenTelemetry tracing and Grafana dashboards, and I use tools like k6 to put real load on a service and watch how it responds.',
  },
  {
    title: 'Software people actually use',
    text: 'Infrastructure matters because of what it makes possible. SignalWatch ingests corporate announcements, uses Claude to summarize and score them, and streams the important ones to users live, so they spend less time searching and more time deciding.',
  },
]

export default function AboutPage() {
  return (
    <main id="main" tabIndex={-1}>
      <section className="pt-section-lg pb-section-lg-b">
        <Container>
          <div className="grid grid-cols-1 items-start gap-9 sm:grid-cols-[1fr_280px]">
            <div>
              <Kicker className="hero-enter mb-3">About me</Kicker>
              <Heading as="h1" size="display" className="hero-enter max-w-[18ch]">
                I&apos;m Tanay. I build{' '}
                <span className="font-serif italic font-normal">backend systems</span> and the
                products on top of them.
              </Heading>
              <p className="hero-enter mt-4 max-w-[48ch] text-pretty text-xl text-muted-foreground">
                I&apos;m a Computer Science student at Rutgers University–New Brunswick, minoring
                in Data Science, and a software engineer at Rutgers&apos; Office of Information
                Technology.
              </p>
              <div className="hero-enter mt-5 grid gap-4">
                <p className={body}>
                  I&apos;m most interested in backend engineering, distributed systems, and the
                  infrastructure that lets software scale. What draws me in is the gap between code
                  that works in a demo and code that keeps working with many users, many instances,
                  and dependencies that sometimes fail. That is where the interesting questions
                  are: how two servers agree on a count, what a gateway should do when a service
                  stops responding, and how you find out why one request was slow.
                </p>
                <p className={body}>
                  I also care about the people on the other end. The systems I enjoy most are the
                  ones that make something useful possible, whether that&apos;s a portal thousands
                  of students rely on or a feed that surfaces the filings worth reading.
                </p>
              </div>
              <div className="hero-enter-actions mt-8 flex flex-wrap items-center gap-3">
                <a
                  href={profile.resume}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={buttonVariants()}
                >
                  Resume
                </a>
                <Link href="#work" className={buttonVariants({ variant: 'outline' })}>
                  See my projects
                </Link>
              </div>
            </div>
            <div className="mx-auto w-full max-w-[280px]">
              <ProfilePhoto />
            </div>
          </div>
        </Container>
      </section>

      <Container>
        <DetailSection label="My journey" title="Working my way down the stack">
          <div className="grid gap-4">
            <p className={body}>
              My path into software started with a diploma in Information Technology at Shri
              Bhagubhai Mafatlal Polytechnic, which I completed in 2023. While I was still in that
              program, I took my first internship, building front-end features at SkillsVista.
            </p>
            <p className={body}>
              After the diploma, I started a B.S. in Computer Science at Rutgers University–New
              Brunswick, with a minor in Data Science, and I expect to graduate in May 2027. A few
              months into my first year, I joined Rutgers&apos; Office of Information Technology as
              a software engineer, which meant learning in class and on a production codebase at
              the same time.
            </p>
            <p className={body}>
              Looking back, my work has moved steadily toward the backend. I started on the front
              end, spent my time at Rutgers building shared React components and untangling state
              management, and then spent a summer working on Java microservices, data integrity,
              and cloud infrastructure at Vertex. My personal projects have followed the same
              direction, each one going a little deeper into how services coordinate, fail, and
              recover.
            </p>
          </div>
          <div className="mt-6">
            <Timeline>
              {education.map((e) => (
                <TimelineItem key={e.school} title={e.school} subtitle={e.degree} period={e.period} />
              ))}
            </Timeline>
          </div>
        </DetailSection>

        <DetailSection label="Experience & growth" title="What the work has taught me">
          <div className="mt-6 flex flex-col">
            {experience.map((e) => (
              <article key={e.org} className="border-b border-border py-6 first:pt-0">
                <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
                  <div className="flex flex-wrap items-baseline gap-x-3 gap-y-0.5">
                    <h3 className="text-base font-semibold">{e.org}</h3>
                    <span className="text-sm text-muted-foreground">{e.role}</span>
                  </div>
                  <span className="shrink-0 text-meta text-faint">{e.period}</span>
                </div>
                {experienceNotes[e.org] ? (
                  <div className="mt-3 grid gap-3">
                    {experienceNotes[e.org].map((note) => (
                      <p key={note} className={body}>
                        {note}
                      </p>
                    ))}
                  </div>
                ) : null}
              </article>
            ))}
          </div>
          <p className={`${body} mt-6`}>
            None of this was solo work. At Rutgers I build with a cross-functional team on a
            shared codebase, and at Vertex my fixes had to be validated across
            several repositories before they could ship. Both taught me to write changes that other
            people can review, test, and build on, and to explain why a change matters, not just
            what it does.
          </p>
        </DetailSection>

        <DetailSection label="What I enjoy building" title="Systems that stay correct under load">
          <p className={body}>
            The projects I enjoy most are the ones where the hard part isn&apos;t visible on the
            screen. I like working on rate limiting, routing, event pipelines, and observability:
            the pieces that decide whether an application is fast, fair, and dependable once
            real traffic shows up.
          </p>
          <div className="mt-8 grid grid-cols-1 gap-x-8 gap-y-7 sm:grid-cols-2">
            {interests.map((item) => (
              <div key={item.title}>
                <Heading as="h3" size="title" className="mb-1.5">
                  {item.title}
                </Heading>
                <p className="text-pretty text-sm leading-relaxed text-muted-foreground">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </DetailSection>
      </Container>

      <Projects />

      <Container>
        <DetailSection label="Looking ahead" title={"Where I'm headed"}>
          <div className="grid gap-4">
            <p className={body}>
              I&apos;m finishing my degree at Rutgers and looking for software engineering roles
              focused on backend and infrastructure work. I want to keep building systems that
              many people and teams depend on, where performance, correctness, and failure
              handling are part of the design from the start rather than added later.
            </p>
            <p className={body}>
              I learn best by building. Reading about rate limiting or circuit breakers only goes
              so far; putting a service under load with k6, or taking down a downstream service on
              purpose to watch a gateway respond, teaches me things a diagram can&apos;t. When
              something breaks, I try to find where the system&apos;s assumptions stopped holding
              before changing any code. The data-integrity bug I fixed at Vertex wasn&apos;t a typo;
              it was a write that needed to happen in two places and only happened in one.
            </p>
            <p className={body}>
              There is still a lot I want to learn, from how large systems are operated day to day
              to how teams make good architectural decisions together. If you&apos;re working on
              problems like these, I&apos;d be glad to hear from you.
            </p>
          </div>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link href="/#contact" className={buttonVariants()}>
              Get in touch
            </Link>
            <CopyEmail variant="outline" />
          </div>
        </DetailSection>
      </Container>
    </main>
  )
}
