import type { HTMLAttributes } from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const headingVariants = cva('m-0 text-balance text-foreground', {
  variants: {
    size: {
      display: 'text-display',
      lg: 'text-heading-lg',
      section: 'text-heading',
      title: 'text-title',
    },
  },
  defaultVariants: { size: 'section' },
})

type HeadingTag = 'h1' | 'h2' | 'h3' | 'h4'

export function Heading({
  as: Comp = 'h2',
  size,
  className,
  ...props
}: HTMLAttributes<HTMLHeadingElement> &
  VariantProps<typeof headingVariants> & { as?: HeadingTag }) {
  return <Comp className={cn(headingVariants({ size }), className)} {...props} />
}
