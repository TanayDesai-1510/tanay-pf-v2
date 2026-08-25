import type { ReactNode } from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'
import { Container } from './container'
import { Heading } from './heading'

const sectionVariants = cva('scroll-mt-nav', {
  variants: {
    bordered: {
      true: 'border-t border-border',
      false: '',
    },
    size: {
      default: 'py-section',
      hero: '-mt-nav pt-[calc(var(--hero-y)+var(--nav-h))] pb-hero-b',
      page: 'py-hero',
      lg: 'pt-section-lg pb-section-lg-b',
    },
  },
  defaultVariants: { bordered: true, size: 'default' },
})

export function Section({
  id,
  title,
  description,
  heading = 'section',
  bordered,
  size,
  className,
  backdrop,
  children,
}: {
  id?: string
  title?: string
  description?: string
  heading?: 'section' | 'lg'
  children: ReactNode
  className?: string
  backdrop?: ReactNode
} & VariantProps<typeof sectionVariants>) {
  return (
    <section
      id={id}
      className={cn(
        sectionVariants({ bordered, size }),
        backdrop && 'relative z-0 overflow-hidden',
        className
      )}
    >
      {backdrop ? (
        <div className="pointer-events-none absolute inset-0" aria-hidden>
          {backdrop}
        </div>
      ) : null}
      <Container className={backdrop ? 'relative' : undefined}>
        {title ? (
          <header className={description ? 'mb-7' : 'mb-6'}>
            <Heading as="h2" size={heading}>
              {title}
            </Heading>
            {description ? (
              <p className="mt-1.5 text-pretty text-base text-muted-foreground">{description}</p>
            ) : null}
          </header>
        ) : null}
        {children}
      </Container>
    </section>
  )
}
