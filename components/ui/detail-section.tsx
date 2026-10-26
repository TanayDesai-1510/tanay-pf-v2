import type { ReactNode } from 'react'
import { Heading } from './heading'
import { Kicker } from './kicker'

export function DetailSection({
  label,
  title,
  children,
}: {
  label: string
  title: string
  children: ReactNode
}) {
  return (
    <section className="border-t border-border py-section">
      <div className="grid gap-5 sm:grid-cols-[minmax(0,180px)_1fr] sm:gap-8">
        <Kicker>{label}</Kicker>
        <div>
          <Heading as="h2" size="lg" className="mb-3">
            {title}
          </Heading>
          {children}
        </div>
      </div>
    </section>
  )
}
