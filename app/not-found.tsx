import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft01Icon } from '@hugeicons/core-free-icons'
import { Icon } from '@/components/icon'
import { buttonVariants } from '@/components/ui/button'
import { Heading } from '@/components/ui/heading'
import { Kicker } from '@/components/ui/kicker'
import { Section } from '@/components/ui/section'

export const metadata: Metadata = {
  title: 'Page not found',
  robots: { index: false, follow: false },
}

export default function NotFound() {
  return (
    <main id="main" tabIndex={-1}>
      <Section bordered={false} size="page">
        <Kicker className="mb-3">404</Kicker>
        <Heading as="h1" size="display" className="max-w-[18ch]">
          This page doesn&apos;t exist.
        </Heading>
        <p className="mt-4 max-w-[40ch] text-pretty text-base text-muted-foreground">
          The URL is wrong, or the page moved. The rest of the site is still here.
        </p>
        <div className="mt-8">
          <Link href="/" className={buttonVariants()}>
            <Icon icon={ArrowLeft01Icon} />
            Back home
          </Link>
        </div>
      </Section>
    </main>
  )
}
