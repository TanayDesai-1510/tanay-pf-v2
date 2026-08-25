'use server'

import React from 'react'
import { Resend } from 'resend'
import { contactFieldErrors, parseContactForm } from '@/lib/contact'
import { profile } from '@/lib/data'
import ContactFormEmail from '@/email/contact-form-email'

const SEND_FAILED = 'Unable to send. Check your connection and try again.'

export const sendEmail = async (formData: FormData) => {
  const fields = parseContactForm(formData)
  const fieldErrors = contactFieldErrors(fields)
  if (Object.keys(fieldErrors).length > 0) {
    return { fieldErrors }
  }

  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) return { error: SEND_FAILED }

  try {
    const resend = new Resend(apiKey)
    const data = await resend.emails.send({
      from: 'Portfolio <onboarding@resend.dev>',
      to: profile.email,
      subject: 'Message from portfolio contact form',
      reply_to: fields.email,
      react: React.createElement(ContactFormEmail, {
        senderName: fields.name,
        senderEmail: fields.email,
        message: fields.message,
      }),
    })
    return { data }
  } catch {
    return { error: SEND_FAILED }
  }
}
