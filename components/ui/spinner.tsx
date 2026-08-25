import { Loading02Icon } from '@hugeicons/core-free-icons'
import { cn } from '@/lib/utils'
import { Icon } from '../icon'

export function Spinner({ className }: { className?: string }) {
  return <Icon icon={Loading02Icon} size={16} className={cn('spinner-fast', className)} />
}
