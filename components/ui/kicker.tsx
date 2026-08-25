import type { HTMLAttributes } from 'react'
import { cn } from '@/lib/utils'

export function Kicker({
  className,
  ...props
}: HTMLAttributes<HTMLParagraphElement>) {
  return <p className={cn('text-kicker uppercase text-faint', className)} {...props} />
}
