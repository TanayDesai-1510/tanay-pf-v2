'use client'
import { useRef, useState } from 'react'
import { toast } from 'sonner'
import { Button } from './ui/button'
import { Field } from './ui/field'
import { Input } from './ui/input'
import { Spinner } from './ui/spinner'
import { Textarea } from './ui/textarea'
import { contactFieldErrors, parseContactForm, type ContactFieldErrors } from '@/lib/contact'
import { sendEmail } from '@/actions/sendEmail'

const FIELD_ORDER = ['name', 'email', 'message'] as const

export function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null)
  const nameRef = useRef<HTMLInputElement>(null)
  const emailRef = useRef<HTMLInputElement>(null)
  const messageRef = useRef<HTMLTextAreaElement>(null)
  const [pending, setPending] = useState(false)
  const [errors, setErrors] = useState<ContactFieldErrors>({})
  const [formError, setFormError] = useState('')

  function focusFirst(next: ContactFieldErrors) {
    const first = FIELD_ORDER.find((key) => next[key])
    if (first === 'name') nameRef.current?.focus()
    else if (first === 'email') emailRef.current?.focus()
    else if (first === 'message') messageRef.current?.focus()
  }

  async function onSubmit(formData: FormData) {
    const fieldErrors = contactFieldErrors(parseContactForm(formData))
    if (Object.keys(fieldErrors).length > 0) {
      setErrors(fieldErrors)
      setFormError('')
      focusFirst(fieldErrors)
      return
    }

    setErrors({})
    setFormError('')
    setPending(true)
    try {
      const result = await sendEmail(formData)
      if (result.fieldErrors) {
        setErrors(result.fieldErrors)
        focusFirst(result.fieldErrors)
        return
      }
      if (result.error) {
        setFormError('Unable to send. Check your connection and try again.')
        return
      }
      toast.success('Message sent — thanks!')
      formRef.current?.reset()
    } catch {
      setFormError('Unable to send. Check your connection and try again.')
    } finally {
      setPending(false)
    }
  }

  return (
    <form ref={formRef} action={onSubmit} className="flex flex-col gap-3.5" noValidate>
      <Field id="c-name" label="Name" error={errors.name}>
        <Input
          ref={nameRef}
          name="name"
          autoComplete="name"
          maxLength={500}
          placeholder="Alex Chen…"
        />
      </Field>
      <Field id="c-email" label="Email" error={errors.email}>
        <Input
          ref={emailRef}
          name="email"
          type="email"
          inputMode="email"
          autoComplete="email"
          spellCheck={false}
          maxLength={500}
          placeholder="you@company.com…"
        />
      </Field>
      <Field id="c-msg" label="Message" error={errors.message}>
        <Textarea
          ref={messageRef}
          name="message"
          maxLength={5000}
          placeholder="I’d like to talk about…"
        />
      </Field>
      <Button type="submit" disabled={pending} aria-busy={pending} className="mt-1 self-start">
        {pending ? <Spinner /> : null}
        Send message
      </Button>
      {formError ? (
        <p className="text-meta text-destructive" role="alert">
          {formError}
        </p>
      ) : null}
    </form>
  )
}
