import { buttonVariants } from './button'
import { cn } from '@/lib/utils'

export function SkipLink() {
  return (
    <a
      href="#main"
      className={cn(
        buttonVariants(),
        'sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50'
      )}
    >
      Skip to content
    </a>
  )
}
