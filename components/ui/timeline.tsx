import type { ReactNode } from 'react'

export function Timeline({ children }: { children: ReactNode }) {
  return <div className="flex flex-col">{children}</div>
}

export function TimelineItem({
  title,
  subtitle,
  period,
}: {
  title: string
  subtitle: string
  period: string
}) {
  return (
    <div className="flex flex-col gap-1 border-b border-border py-3.5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
      <div className="flex flex-wrap items-baseline gap-x-3 gap-y-0.5">
        <span className="text-base font-semibold">{title}</span>
        <span className="text-sm text-muted-foreground">{subtitle}</span>
      </div>
      <span className="shrink-0 text-meta text-faint">{period}</span>
    </div>
  )
}
