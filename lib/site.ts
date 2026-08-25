import { education, profile } from './data'

export const siteTitle = `${profile.name} — Software Engineer`
export const siteDescription =
  'Software engineer building fast, reliable systems and the interfaces on top of them.'

export function getSiteUrl() {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL
  if (explicit) return explicit.replace(/\/$/, '')
  if (process.env.VERCEL_PROJECT_PRODUCTION_URL) {
    return `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  }
  return 'http://localhost:3003'
}

export function personJsonLd() {
  const url = getSiteUrl()
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: profile.name,
    url,
    email: profile.email,
    image: `${url}${profile.photo}`,
    jobTitle: 'Software Engineer',
    description: siteDescription,
    sameAs: [profile.github, profile.linkedin],
    alumniOf: education.map((item) => ({
      '@type': 'CollegeOrUniversity',
      name: item.school,
    })),
  }
}
