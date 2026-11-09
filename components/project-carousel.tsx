'use client'

import { useCallback, useEffect, useId, useState, type KeyboardEvent } from 'react'
import Image from 'next/image'
import {
  ArrowLeft01Icon,
  ArrowRight01Icon,
  PauseIcon,
  PlayIcon,
} from '@hugeicons/core-free-icons'
import { cn, focusRing } from '@/lib/utils'
import { Icon } from './icon'
import { buttonVariants } from './ui/button'
import { Heading } from './ui/heading'
import { Kicker } from './ui/kicker'

export type CarouselSlide = {
  id: string
  image: string
  alt: string
  kicker: string
  title: string
  caption: string
}

const INTERVAL_MS = 6000

const swapClass =
  'transition-opacity duration-300 ease-out motion-reduce:transition-none'

const controlClass = cn(buttonVariants({ variant: 'outline' }), 'w-11 px-0')

export function ProjectCarousel({ slides, label }: { slides: CarouselSlide[]; label: string }) {
  const [index, setIndex] = useState(0)
  const [playing, setPlaying] = useState(true)
  const [hovered, setHovered] = useState(false)
  const [focused, setFocused] = useState(false)
  const baseId = useId()
  const count = slides.length

  const go = useCallback((next: number) => setIndex(((next % count) + count) % count), [count])

  // Respect reduced motion: start paused, and let the visitor opt in with Play.
  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (media.matches) setPlaying(false)
  }, [])

  const rotating = playing && !hovered && !focused

  useEffect(() => {
    if (!rotating) return
    const timer = window.setInterval(() => setIndex((value) => (value + 1) % count), INTERVAL_MS)
    return () => window.clearInterval(timer)
  }, [rotating, count, index])

  function onKeyDown(event: KeyboardEvent<HTMLElement>) {
    if (event.key === 'ArrowRight') {
      event.preventDefault()
      go(index + 1)
    } else if (event.key === 'ArrowLeft') {
      event.preventDefault()
      go(index - 1)
    } else if (event.key === 'Home') {
      event.preventDefault()
      go(0)
    } else if (event.key === 'End') {
      event.preventDefault()
      go(count - 1)
    }
  }

  return (
    <section
      aria-roledescription="carousel"
      aria-label={label}
      onKeyDown={onKeyDown}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      // Pause for keyboard focus only, so a mouse click on a control doesn't stop rotation.
      onFocus={(event) => {
        if (event.target.matches(':focus-visible')) setFocused(true)
      }}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) setFocused(false)
      }}
    >
      <div
        id={`${baseId}-slides`}
        aria-live={rotating ? 'off' : 'polite'}
        className="grid"
      >
        <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-card to-background shadow-border">
          {slides.map((slide, i) => (
            <div
              key={slide.id}
              className={cn(
                'absolute inset-0',
                swapClass,
                i === index ? 'opacity-100' : 'pointer-events-none opacity-0'
              )}
              aria-hidden={i !== index}
            >
              <Image
                src={slide.image}
                alt={slide.alt}
                fill
                className="image-ring object-contain p-3 sm:p-4"
                sizes="(min-width: 768px) 700px, 100vw"
              />
            </div>
          ))}
        </div>

        <div className="mt-5 grid">
          {slides.map((slide, i) => (
            <div
              key={slide.id}
              id={`${baseId}-slide-${i}`}
              role="group"
              aria-roledescription="slide"
              aria-label={`${i + 1} of ${count}: ${slide.title}`}
              aria-hidden={i !== index}
              className={cn(
                'col-start-1 row-start-1',
                swapClass,
                i === index ? 'opacity-100' : 'invisible opacity-0'
              )}
            >
              <Kicker className="mb-1.5">{slide.kicker}</Kicker>
              <Heading as="h4" size="title" className="mb-1.5">
                {slide.title}
              </Heading>
              <p className="max-w-[60ch] text-pretty text-sm leading-relaxed text-muted-foreground">
                {slide.caption}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center" role="group" aria-label="Choose a slide">
          {slides.map((slide, i) => (
            <button
              key={slide.id}
              type="button"
              aria-label={`Show slide ${i + 1}: ${slide.title}`}
              aria-current={i === index ? 'true' : undefined}
              aria-controls={`${baseId}-slides`}
              onClick={() => go(i)}
              className={cn('group inline-flex h-11 w-7 items-center justify-center rounded-full', focusRing)}
            >
              <span
                className={cn(
                  'h-2 rounded-full transition-[width,background-color] duration-160 ease-out motion-reduce:transition-none',
                  i === index ? 'w-5 bg-foreground' : 'w-2 bg-input group-hover:bg-faint'
                )}
              />
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            className={controlClass}
            aria-label={playing ? 'Pause automatic rotation' : 'Start automatic rotation'}
            onClick={() => setPlaying((value) => !value)}
          >
            <Icon icon={PauseIcon} altIcon={PlayIcon} showAlt={!playing} />
          </button>
          <button
            type="button"
            className={controlClass}
            aria-label="Previous slide"
            aria-controls={`${baseId}-slides`}
            onClick={() => go(index - 1)}
          >
            <Icon icon={ArrowLeft01Icon} />
          </button>
          <button
            type="button"
            className={controlClass}
            aria-label="Next slide"
            aria-controls={`${baseId}-slides`}
            onClick={() => go(index + 1)}
          >
            <Icon icon={ArrowRight01Icon} />
          </button>
        </div>
      </div>
    </section>
  )
}
