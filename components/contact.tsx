'use client'
import { useRef, useState } from 'react'
import toast from 'react-hot-toast'
import { Reveal } from './reveal'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { Textarea } from './ui/textarea'
import { profile } from '@/lib/data'
import { sendEmail } from '@/actions/sendEmail'

export function Contact() {
  const formRef = useRef<HTMLFormElement>(null)
  const [pending, setPending] = useState(false)

  async function onSubmit(formData: FormData) {
    const name = formData.get('senderName')
    const message = formData.get('message')
    if (name) formData.set('message', `${message}\n\nFrom: ${name}`)

    setPending(true)
    const { error } = await sendEmail(formData)
    setPending(false)
    if (error) {
      toast.error(error)
      return
    }
    toast.success('Message sent — thanks!')
    formRef.current?.reset()
  }

  return (
    <section id="contact" className="border-t border-border py-[clamp(2.8rem,7vh,4.5rem)] pb-[clamp(3.5rem,9vh,5.5rem)]">
      <div className="mx-auto max-w-site px-[clamp(18px,5vw,24px)]">
        <Reveal>
          <h2 className="m-0 text-[clamp(1.6rem,3.6vw,2.2rem)] font-semibold tracking-[-.02em]">Let&apos;s talk.</h2>
          <p className="mb-7 mt-1.5 text-base text-muted-foreground">Open to SDE and backend roles. Drop a note.</p>
        </Reveal>
        <div className="grid grid-cols-1 items-start gap-9 sm:grid-cols-[1fr_280px]">
          <Reveal>
            <form ref={formRef} action={onSubmit} className="flex flex-col gap-[15px]">
              <div className="flex flex-col gap-[7px]">
                <label htmlFor="c-name" className="text-[13px] text-muted-foreground">Name</label>
                <Input id="c-name" name="senderName" placeholder="Your name" />
              </div>
              <div className="flex flex-col gap-[7px]">
                <label htmlFor="c-email" className="text-[13px] text-muted-foreground">Email</label>
                <Input id="c-email" name="senderEmail" type="email" placeholder="you@example.com" required />
              </div>
              <div className="flex flex-col gap-[7px]">
                <label htmlFor="c-msg" className="text-[13px] text-muted-foreground">Message</label>
                <Textarea id="c-msg" name="message" placeholder="What's on your mind?" required />
              </div>
              <Button type="submit" disabled={pending} className="mt-1 self-start">
                {pending ? 'Sending…' : 'Send message'}
              </Button>
            </form>
          </Reveal>

          <Reveal delay={0.1} className="mx-auto w-full max-w-[280px]">
            {profile.photo ? (
              <img src={profile.photo} alt={profile.name} className="aspect-[4/5] w-full rounded-[18px] border border-border object-cover" />
            ) : (
              <div className="relative flex aspect-[4/5] flex-col items-center justify-center gap-2.5 overflow-hidden rounded-[18px] border border-dashed border-input bg-gradient-to-br from-card to-background">
                <svg viewBox="0 0 24 24" className="h-[30px] w-[30px] text-faint" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="3" /><circle cx="8.5" cy="9" r="1.9" /><path d="m21 15-5-5L5 21" /></svg>
                <span className="px-5 text-center text-xs leading-[1.5] text-faint">your photo goes here<br />(set profile.photo in lib/data.ts)</span>
                <span className="absolute bottom-3 left-3 rounded-lg border border-border bg-black/50 px-2 py-1 text-[11px] text-muted-foreground">{profile.name}</span>
              </div>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  )
}
