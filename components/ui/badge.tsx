import type { HTMLAttributes } from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const badgeVariants = cva('inline-flex items-center', {
  variants: {
    variant: {
      tag: 'rounded-md border border-border px-2 py-0.5 text-caption text-muted-foreground',
      chip: 'rounded-full border border-input px-3 py-1 text-meta text-foreground',
    },
  },
  defaultVariants: { variant: 'tag' },
})

export function Badge({
  className,
  variant,
  ...props
}: HTMLAttributes<HTMLSpanElement> & VariantProps<typeof badgeVariants>) {
  return <span className={cn(badgeVariants({ variant }), className)} {...props} />
}
