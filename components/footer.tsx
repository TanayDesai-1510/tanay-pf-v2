import { GithubIcon, Linkedin01Icon } from '@hugeicons/core-free-icons'
import { profile } from '@/lib/data'
import { Icon } from './icon'
import { Container } from './ui/container'
import { TextLink } from './ui/text-link'

export function Footer() {
  return (
    <footer>
      <Container>
        <div className="flex flex-wrap items-center justify-between gap-2.5 border-t border-border py-8 pb-12 text-meta text-faint">
          <span className="whitespace-nowrap text-base">
            © {new Date().getFullYear()} {profile.name}
          </span>
          <div className="flex gap-1">
            <TextLink
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              variant="footer"
              className="gap-1.5 text-base"
            >
              <Icon icon={GithubIcon} size={17} />
              GitHub
            </TextLink>
            <TextLink
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              variant="footer"
              className="gap-1.5 text-base"
            >
              <Icon icon={Linkedin01Icon} size={17} />
              LinkedIn
            </TextLink>
          </div>
        </div>
      </Container>
    </footer>
  )
}
