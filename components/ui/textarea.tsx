import { forwardRef, type TextareaHTMLAttributes } from 'react'
import { cn } from '@/lib/utils'
import { fieldControl } from './field'

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaHTMLAttributes<HTMLTextAreaElement>>(
  ({ className, ...props }, ref) => (
    <textarea ref={ref} className={cn(fieldControl, 'min-h-[120px] py-2.5', className)} {...props} />
  )
)
Textarea.displayName = 'Textarea'
