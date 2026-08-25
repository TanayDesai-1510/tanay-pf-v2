'use client'

import { useCallback, useEffect, useId, useRef, useState } from 'react'
import { Cancel01Icon, Menu01Icon } from '@hugeicons/core-free-icons'
import { navLinks } from '@/lib/data'
import { cn, focusRing } from '@/lib/utils'
import { CopyEmail } from './copy-email'
import { Icon } from './icon'
import { Container } from './ui/container'
import { TextLink } from './ui/text-link'

export function MobileNav() {
  const [open, setOpen] = useState(false)
  const menuId = useId()
  const buttonRef = useRef<HTMLButtonElement>(null)

  const close = useCallback(() => setOpen(false), [])

  useEffect(() => {
    if (!open) return

    const onKey = (event: KeyboardEvent) => {
      if (event.key !== 'Escape') return
      close()
      buttonRef.current?.focus()
    }

    const media = window.matchMedia('(min-width: 768px)')
    const onBreakpoint = (event: MediaQueryListEvent) => {
      if (event.matches) close()
    }

    document.addEventListener('keydown', onKey)
    media.addEventListener('change', onBreakpoint)
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', onKey)
      media.removeEventListener('change', onBreakpoint)
      document.body.style.overflow = previousOverflow
    }
  }, [open, close])

  return (
    <div className="md:hidden">
      <button
        ref={buttonRef}
        type="button"
        className={cn('-mr-2 inline-flex h-11 w-11 items-center justify-center rounded-full', focusRing)}
        aria-expanded={open}
        aria-controls={menuId}
        aria-label={open ? 'Close menu' : 'Open menu'}
        onClick={() => setOpen((value) => !value)}
      >
        <Icon icon={Menu01Icon} altIcon={Cancel01Icon} showAlt={open} size={20} />
      </button>
      {open ? (
        <>
          <div
            aria-hidden
            className="fixed inset-x-0 bottom-0 top-nav z-30 bg-foreground/20"
            onClick={close}
          />
          <div
            id={menuId}
            className="fixed inset-x-0 top-nav z-40 border-b border-border bg-background/95 shadow-border backdrop-blur-md backdrop-saturate-150"
          >
            <Container className="menu-enter py-3">
              <ul className="flex flex-col">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <TextLink href={link.href} variant="menu" onClick={close}>
                      {link.label}
                    </TextLink>
                  </li>
                ))}
              </ul>
              <div onClick={close}>
                <CopyEmail variant="menu" />
              </div>
            </Container>
          </div>
        </>
      ) : null}
    </div>
  )
}
