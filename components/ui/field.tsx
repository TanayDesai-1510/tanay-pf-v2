import { cloneElement, type ReactElement } from 'react'

export const fieldControl =
  'flex w-full rounded-xl border border-input bg-card px-3.5 text-base text-foreground placeholder:text-faint transition-[border-color,box-shadow] focus-visible:outline-none focus-visible:border-foreground focus-visible:ring-2 focus-visible:ring-foreground/10 disabled:opacity-50 aria-[invalid=true]:border-destructive sm:text-[15px]'

export function Field({
  id,
  label,
  error,
  children,
}: {
  id: string
  label: string
  error?: string
  children: ReactElement
}) {
  const errorId = `${id}-error`
  const control = cloneElement(children, {
    id,
    'aria-invalid': error ? true : undefined,
    'aria-describedby': error ? errorId : undefined,
  })

  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="text-meta text-muted-foreground">
        {label}
      </label>
      {control}
      {error ? (
        <p id={errorId} className="text-meta text-destructive">
          {error}
        </p>
      ) : null}
    </div>
  )
}
