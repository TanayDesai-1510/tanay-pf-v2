import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft01Icon, ArrowUpRight01Icon } from '@hugeicons/core-free-icons'
import { projects } from '@/lib/data'
import { Icon } from '@/components/icon'
import { ProjectCard } from '@/components/project-card'
import { Badge } from '@/components/ui/badge'
import { Container } from '@/components/ui/container'
import { DetailSection } from '@/components/ui/detail-section'
import { Heading } from '@/components/ui/heading'
import { Kicker } from '@/components/ui/kicker'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'

type ProjectPageProps = {
  params: { slug: string }
}

function getProject(slug: string) {
  return projects.find((project) => project.id === slug)
}

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.id }))
}

export function generateMetadata({ params }: ProjectPageProps): Metadata {
  const project = getProject(params.slug)

  if (!project) {
    return { title: 'Project not found' }
  }

  return {
    title: project.name,
    description: project.blurb,
  }
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = getProject(params.slug)

  if (!project) notFound()

  return (
    <main id="main" tabIndex={-1}>
      <section className="pt-section-lg pb-section-lg-b">
        <Container>
          <Link
            href="/#work"
            className={cn(buttonVariants({ variant: 'outline' }), 'mb-10')}
          >
            <Icon icon={ArrowLeft01Icon} />
            Back to projects
          </Link>

          <div className="max-w-[46rem]">
            <Kicker className="mb-3">{project.kicker}</Kicker>
            <Heading as="h1" size="display">
              {project.name}
            </Heading>
            <p className="mt-4 max-w-[48ch] text-pretty text-xl text-muted-foreground">
              {project.blurb}
            </p>

            <div className="mt-6 flex flex-wrap gap-1.5">
              {project.tags.map((tag) => (
                <Badge key={tag} variant="chip">
                  {tag}
                </Badge>
              ))}
            </div>

            <div className="mt-8">
              {project.demoUrl ? (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={buttonVariants()}
                >
                  Open live demo
                  <Icon icon={ArrowUpRight01Icon} />
                </a>
              ) : (
                <span className="inline-flex h-11 items-center rounded-full border border-border px-5 text-sm text-muted-foreground">
                  No live demo yet
                </span>
              )}
            </div>
          </div>

          <div className="mt-12 max-w-[760px] overflow-hidden rounded-2xl border border-border bg-card shadow-border">
            <div className="relative aspect-[16/10]">
              <Image
                src={project.image}
                alt={`${project.name} project preview`}
                fill
                priority
                className="object-contain p-4"
                sizes="(min-width: 768px) 760px, 100vw"
              />
            </div>
          </div>
        </Container>
      </section>

      <Container>
        <DetailSection label="Overview" title="What it does">
          <p className="max-w-[60ch] text-pretty text-base leading-relaxed text-muted-foreground">
            {project.overview}
          </p>
        </DetailSection>

        <DetailSection label="Motivation" title="Why it exists">
          <p className="max-w-[60ch] text-pretty text-base leading-relaxed text-muted-foreground">
            {project.why}
          </p>
        </DetailSection>

        <DetailSection label="Capabilities" title="What to look for">
          <ul className="grid gap-3 text-base text-muted-foreground">
            {project.highlights.map((highlight) => (
              <li key={highlight} className="flex gap-3">
                <span className="mt-2 size-1.5 shrink-0 rounded-full bg-foreground" />
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        </DetailSection>

        <DetailSection label="Architecture" title="How it works">
          <ol className="grid gap-4">
            {project.howItWorks.map((step, index) => (
              <li key={step} className="flex gap-3 text-base text-muted-foreground">
                <span className="flex size-7 shrink-0 items-center justify-center rounded-full border border-border text-caption text-foreground">
                  {index + 1}
                </span>
                <span className="pt-0.5">{step}</span>
              </li>
            ))}
          </ol>
        </DetailSection>

        <DetailSection label="Getting started" title="How to start it">
          <ol className="grid gap-4">
            {project.setup.map((step, index) => (
              <li key={step} className="flex gap-3 text-base text-muted-foreground">
                <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-primary text-caption text-primary-foreground">
                  {index + 1}
                </span>
                <span className="pt-0.5">{step}</span>
              </li>
            ))}
          </ol>
        </DetailSection>

        <DetailSection label="Usage" title="How to use it">
          <ul className="grid gap-3 text-base text-muted-foreground">
            {project.usage.map((step) => (
              <li key={step} className="flex gap-3">
                <span className="mt-2 size-1.5 shrink-0 rounded-full bg-foreground" />
                <span>{step}</span>
              </li>
            ))}
          </ul>
        </DetailSection>

        <DetailSection label="More projects" title="Keep exploring">
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {projects
              .filter((other) => other.id !== project.id)
              .map((other) => (
                <ProjectCard key={other.id} project={other} />
              ))}
          </div>
        </DetailSection>
      </Container>
    </main>
  )
}
