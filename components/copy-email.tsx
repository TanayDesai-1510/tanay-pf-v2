'use client'
import { useState } from 'react'
import { profile } from '@/lib/data'
import { cn } from '@/lib/utils'

export function CopyEmail({ className, label = 'Email' }: { className?: string; label?: string }) {
  const [copied, setCopied] = useState(false)
  return (
    <button
      type="button"
      onClick={() => {
        navigator.clipboard?.writeText(profile.email)
        setCopied(true)
        setTimeout(() => setCopied(false), 1600)
      }}
      className={cn('transition-colors', className)}
      aria-live="polite"
    >
      {copied ? 'Copied ✓' : label}
    </button>
  )
}
