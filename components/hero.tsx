import Aurora from './Aurora'
import { CopyEmail } from './copy-email'
import { Heading } from './ui/heading'
import { Section } from './ui/section'
import { buttonVariants } from './ui/button'
import { profile } from '@/lib/data'

export function Hero() {
  return (
    <Section
      id="hero"
      bordered={false}
      size="hero"
      backdrop={
        <Aurora colorStops={['#4c4c4c', '#4c4c4c', '#4c4c4c']} amplitude={1} blend={1} />
      }
    >
      <Heading as="h1" size="display" className="hero-enter max-w-[20ch]">
        Hi, I&apos;m Tanay. A software engineer who builds{' '}
        <span className="font-serif italic font-normal">fast, reliable systems</span>{' '}
        and the interfaces that live on top of them.
      </Heading>
      <div className="hero-enter-actions mt-8 flex flex-wrap items-center gap-3">
        <a
          href={profile.resume}
          target="_blank"
          rel="noopener noreferrer"
          className={buttonVariants()}
        >
          Resume
        </a>
        <CopyEmail variant="outline" />
      </div>
    </Section>
  )
}
