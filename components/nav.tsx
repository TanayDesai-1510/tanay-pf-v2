import { profile } from '@/lib/data'
import { CopyEmail } from './copy-email'

export function Nav() {
  return (
    <nav className="sticky top-0 z-40 h-14 border-b border-border bg-background/70 backdrop-blur-md backdrop-saturate-150">
      <div className="mx-auto flex h-full max-w-site items-center justify-between px-[clamp(18px,5vw,24px)]">
        <a href="#hero" className="text-base font-semibold tracking-[-.01em]">{profile.name}</a>
        <div className="flex items-center gap-4 sm:gap-6">
          <a href="#work" className="hidden text-sm text-muted-foreground transition-colors hover:text-foreground sm:inline">Work</a>
          <a href="#experience" className="hidden text-sm text-muted-foreground transition-colors hover:text-foreground sm:inline">Experience</a>
          <CopyEmail className="text-sm text-muted-foreground hover:text-foreground" />
        </div>
      </div>
    </nav>
  )
}
