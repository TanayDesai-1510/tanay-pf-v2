import type { ButtonHTMLAttributes } from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn, focusRing } from '@/lib/utils'

const buttonVariants = cva(
  `inline-flex h-11 items-center justify-center gap-2 whitespace-nowrap rounded-full px-5 text-sm font-semibold transition-[transform,opacity,color,box-shadow] duration-160 ease-out motion-reduce:transition-none ${focusRing} disabled:pointer-events-none disabled:opacity-50 motion-safe:active:scale-[.97]`,
  {
    variants: {
      variant: {
        default: 'bg-primary text-primary-foreground hover:opacity-90',
        outline: 'shadow-border text-foreground hover:shadow-border-hover',
      },
    },
    defaultVariants: { variant: 'default' },
  }
)

export function Button({
  className,
  variant,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & VariantProps<typeof buttonVariants>) {
  return <button className={cn(buttonVariants({ variant }), className)} {...props} />
}

export { buttonVariants }
