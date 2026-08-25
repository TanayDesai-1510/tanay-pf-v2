import { navLinks, profile } from '@/lib/data'
import { CopyEmail } from './copy-email'
import { MobileNav } from './mobile-nav'
import { NavFrame } from './nav-frame'
import { Container } from './ui/container'
import { TextLink } from './ui/text-link'

export function Nav() {
  return (
    <NavFrame>
      <Container className="flex h-full items-center justify-between gap-2">
        <TextLink href="/#hero" variant="brand">
          {profile.name}
        </TextLink>
        <div className="hidden h-full items-center md:flex">
          {navLinks.map((link) => (
            <TextLink key={link.href} href={link.href}>
              {link.label}
            </TextLink>
          ))}
          <CopyEmail />
        </div>
        <MobileNav />
      </Container>
    </NavFrame>
  )
}
