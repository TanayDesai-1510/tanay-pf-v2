import { ContactForm } from './contact-form'
import { ProfilePhoto } from './profile-photo'
import { Section } from './ui/section'
import { Toaster } from './ui/toaster'

export function Contact() {
  return (
    <Section
      id="contact"
      size="lg"
      heading="lg"
      title="Let's talk."
      description="Open to SDE and backend roles. Send a note about a role or a project."
    >
      <div className="grid grid-cols-1 items-start gap-9 sm:grid-cols-[1fr_280px]">
        <ContactForm />
        <div className="mx-auto w-full max-w-[280px]">
          <ProfilePhoto />
        </div>
      </div>
      <Toaster />
    </Section>
  )
}
