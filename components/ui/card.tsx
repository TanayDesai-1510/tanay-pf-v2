import type { HTMLAttributes } from 'react'
import { cn } from '@/lib/utils'

export function Card({
  className,
  interactive,
  ...props
}: HTMLAttributes<HTMLDivElement> & { interactive?: boolean }) {
  return (
    <div className={cn('card-surface', interactive && 'card-interactive', className)} {...props} />
  )
}

export function CardMedia({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        'relative flex aspect-[16/10] items-center justify-center overflow-hidden border-b border-border bg-gradient-to-br from-card to-background text-faint',
        className
      )}
      {...props}
    />
  )
}

export function CardBody({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return <div className={cn('p-4 pb-[1.125rem]', className)} {...props} />
}

export function CardDescription({ className, ...props }: HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p
      className={cn('text-pretty text-sm leading-normal text-muted-foreground', className)}
      {...props}
    />
  )
}
