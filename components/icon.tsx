import { HugeiconsIcon, type IconSvgElement } from '@hugeicons/react'
import { cn } from '@/lib/utils'

export function Icon({
  icon,
  altIcon,
  showAlt,
  size = 16,
  strokeWidth = 1.5,
  className,
}: {
  icon: IconSvgElement
  altIcon?: IconSvgElement
  showAlt?: boolean
  size?: number
  strokeWidth?: number
  className?: string
}) {
  return (
    <HugeiconsIcon
      icon={icon}
      altIcon={altIcon}
      showAlt={showAlt}
      size={size}
      color="currentColor"
      strokeWidth={strokeWidth}
      className={cn('shrink-0', className)}
      aria-hidden
    />
  )
}
