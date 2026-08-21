import { profile } from '@/lib/data'
export function Footer() {
  return (
    <footer className="mx-auto max-w-site px-[clamp(18px,5vw,24px)]">
      <div className="flex flex-wrap justify-between gap-2.5 border-t border-border py-8 pb-12 text-[13px] text-faint">
        <span>© {new Date().getFullYear()} {profile.name}</span>
        <div className="flex gap-4">
          <a href={profile.github} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-foreground">GitHub</a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-foreground">LinkedIn</a>
        </div>
      </div>
    </footer>
  )
}
