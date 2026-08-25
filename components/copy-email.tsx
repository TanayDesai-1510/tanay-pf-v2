'use client'
import { useEffect, useRef, useState } from 'react'
import { Copy01Icon, Tick02Icon } from '@hugeicons/core-free-icons'
import { profile } from '@/lib/data'
import { cn } from '@/lib/utils'
import { Icon } from './icon'
import { buttonVariants } from './ui/button'
import { textLinkVariants } from './ui/text-link'

const MAILTO = `mailto:${profile.email}`

const swapClass =
  'col-start-1 row-start-1 transition-[opacity,filter] duration-200 ease motion-reduce:transition-none'

export function CopyEmail({
  className,
  variant = 'link',
}: {
  className?: string
  variant?: 'outline' | 'link' | 'menu'
}) {
  const [copied, setCopied] = useState(false)
  const timer = useRef(0)

  useEffect(() => () => window.clearTimeout(timer.current), [])

  async function onCopy() {
    try {
      if (!navigator.clipboard?.writeText) throw new Error('no clipboard')
      await navigator.clipboard.writeText(profile.email)
      setCopied(true)
      window.clearTimeout(timer.current)
      timer.current = window.setTimeout(() => setCopied(false), 1600)
    } catch {
      window.location.href = MAILTO
    }
  }

  const styles =
    variant === 'outline'
      ? buttonVariants({ variant: 'outline' })
      : textLinkVariants({ variant: variant === 'menu' ? 'menu' : 'nav' })

  return (
    <span className={cn('inline-flex items-center', variant === 'link' && 'h-full', variant === 'menu' && 'w-full')}>
      <button
        type="button"
        onClick={onCopy}
        aria-label={copied ? 'Copied email' : 'Copy email'}
        className={cn(
          styles,
          'gap-1.5 motion-safe:transition-[transform,color] motion-safe:duration-160 motion-safe:ease-out motion-safe:active:scale-[.97]',
          className
        )}
      >
        Email
        <span className="relative inline-grid" aria-hidden>
          <span className={cn(swapClass, copied ? 'pointer-events-none opacity-0 blur-[2px]' : 'opacity-100 blur-0')}>
            <Icon icon={Copy01Icon} />
          </span>
          <span className={cn(swapClass, copied ? 'opacity-100 blur-0' : 'pointer-events-none opacity-0 blur-[2px]')}>
            <Icon icon={Tick02Icon} />
          </span>
        </span>
      </button>
      <span className="sr-only" aria-live="polite" aria-atomic="true">
        {copied ? 'Copied to clipboard' : ''}
      </span>
    </span>
  )
}
