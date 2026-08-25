'use client'

import { useEffect, useState, type ReactNode } from 'react'
import { cn } from '@/lib/utils'

export function NavFrame({ children }: { children: ReactNode }) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    function update() {
      setScrolled(window.scrollY > 0)
    }

    update()
    window.addEventListener('scroll', update, { passive: true })
    return () => window.removeEventListener('scroll', update)
  }, [])

  return (
    <nav
      className={cn(
        'sticky top-0 z-40 h-nav transition-[background-color,border-color,backdrop-filter] duration-200 ease-out',
        scrolled
          ? 'border-b border-border bg-background/80 backdrop-blur-md backdrop-saturate-150'
          : 'border-b border-transparent bg-transparent'
      )}
    >
      {children}
    </nav>
  )
}
