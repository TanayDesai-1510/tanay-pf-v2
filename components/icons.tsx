export function ProjectIcon({ name, className = 'w-[26px] h-[26px]' }: { name: 'sliders' | 'trend' | 'graph'; className?: string }) {
  const p = { fill: 'none', stroke: 'currentColor', strokeWidth: 1.5, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const }
  const shapes = {
    sliders: <path d="M4 7h16M4 12h16M4 17h10" />,
    trend: <path d="M3 17l6-6 4 4 8-8" />,
    graph: (<><circle cx="6" cy="12" r="2.3" /><circle cx="18" cy="6" r="2.3" /><circle cx="18" cy="18" r="2.3" /><path d="M8 11l8-4M8 13l8 4" /></>),
  }
  return <svg viewBox="0 0 24 24" className={className} {...p}>{shapes[name]}</svg>
}
