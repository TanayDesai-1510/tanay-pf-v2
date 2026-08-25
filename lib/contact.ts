export type ContactFields = {
  name: string
  email: string
  message: string
}

export type ContactFieldErrors = Partial<Record<keyof ContactFields, string>>

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export function parseContactForm(formData: FormData): ContactFields {
  return {
    name: String(formData.get('name') ?? '').trim(),
    email: String(formData.get('email') ?? '').trim(),
    message: String(formData.get('message') ?? '').trim(),
  }
}

export function contactFieldErrors(fields: ContactFields): ContactFieldErrors {
  const errors: ContactFieldErrors = {}
  if (fields.name.length > 500) errors.name = 'Name is too long.'
  if (!fields.email) errors.email = 'Enter an email so I can reply.'
  else if (fields.email.length > 500 || !EMAIL.test(fields.email)) {
    errors.email = 'Enter a valid email, like you@company.com.'
  }
  if (!fields.message) errors.message = 'Write a short message.'
  else if (fields.message.length > 5000) errors.message = 'Message is too long (5000 character max).'
  return errors
}
