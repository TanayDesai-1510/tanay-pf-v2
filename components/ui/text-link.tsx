import type { AnchorHTMLAttributes } from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn, focusRing } from '@/lib/utils'

const textLinkVariants = cva(
  `inline-flex items-center transition-colors duration-160 ease-out motion-reduce:transition-none ${focusRing}`,
  {
    variants: {
      variant: {
        nav: 'h-full shrink-0 px-2.5 text-sm text-muted-foreground hover:text-foreground',
        brand: 'h-full shrink-0 text-sm font-semibold tracking-[-.01em] sm:text-base',
        footer: 'min-h-11 px-2 hover:text-foreground',
        menu: 'min-h-12 w-full justify-start px-1 text-base text-foreground hover:text-muted-foreground',
      },
    },
    defaultVariants: { variant: 'nav' },
  }
)

export function TextLink({
  className,
  variant,
  ...props
}: AnchorHTMLAttributes<HTMLAnchorElement> & VariantProps<typeof textLinkVariants>) {
  return <a className={cn(textLinkVariants({ variant }), className)} {...props} />
}

export { textLinkVariants }
