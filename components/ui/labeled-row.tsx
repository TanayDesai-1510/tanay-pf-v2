import type { ReactNode } from 'react'

export function LabeledRow({
  label,
  children,
}: {
  label: string
  children: ReactNode
}) {
  return (
    <div className="grid grid-cols-1 items-start gap-2 sm:grid-cols-[140px_1fr] sm:gap-4">
      <span className="pt-1 text-meta text-faint">{label}</span>
      <div>{children}</div>
    </div>
  )
}
