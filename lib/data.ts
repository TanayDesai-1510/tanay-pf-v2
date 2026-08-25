export const profile = {
  name: 'Tanay Desai',
  email: 'tanaydesai2004@gmail.com',
  github: 'https://github.com/TanayDesai-1510',
  linkedin: 'https://linkedin.com/in/tanaydesai1510/',
  resume: '/Resume_Tanay_Desai.pdf',
  photo: '/profile.webp',
}

export const navLinks = [
  { href: '/#work', label: 'Work' },
  { href: '/#experience', label: 'Experience' },
  { href: '/#contact', label: 'Contact' },
] as const

export type Project = {
  id: string
  kicker: string
  name: string
  blurb: string
  tags: string[]
  image: string
  href?: string
}

export const projects: Project[] = [
  {
    id: 'quotaforge',
    kicker: 'Distributed systems',
    name: 'QuotaForge',
    blurb: 'Multi-tenant rate limiter, correct under concurrent load.',
    tags: ['Java 21', 'Redis', 'OTel'],
    image: '/projects/quotaforge.webp',
  },
  {
    id: 'signalwatch',
    kicker: 'AI + full-stack',
    name: 'SignalWatch',
    blurb: 'Ingests market filings, scores them with Claude, alerts live.',
    tags: ['Next.js', 'Prisma', 'SSE'],
    image: '/projects/signalwatch.webp',
    href: 'https://github.com/TanayDesai-1510/signalwatch',
  },
  {
    id: 'routemesh',
    kicker: 'Platform',
    name: 'RouteMesh',
    blurb: 'API gateway with discovery, circuit breakers, live telemetry.',
    tags: ['Spring Cloud', 'Kafka', 'Grafana'],
    image: '/projects/routemesh.webp',
  },
]

export type ExperienceItem = { org: string; role: string; period: string }
export const experience: ExperienceItem[] = [
  { org: 'Rutgers OIT', role: 'Software Engineer', period: 'Feb 2024 – Present' },
  { org: 'Vertex Inc.', role: 'Software Engineering Intern, Backend', period: 'Jun – Aug 2026' },
  { org: 'SkillsVista', role: 'Front End Engineering Intern', period: 'Jul – Aug 2022' },
]

export type EducationItem = { school: string; degree: string; period: string }
export const education: EducationItem[] = [
  { school: 'Rutgers University, New Brunswick', degree: 'B.S. Computer Science, minor in Data Science', period: 'Sep 2023 – May 2027' },
  { school: 'Shri Bhagubhai Mafatlal Polytechnic', degree: 'Diploma, Information Technology', period: 'Dec 2020 – Jun 2023' },
]

export type SkillGroup = { group: string; items: string[] }
export const skills: SkillGroup[] = [
  { group: 'Languages', items: ['Java', 'Python', 'C/C++', 'JavaScript', 'TypeScript', 'SQL', 'HTML/CSS'] },
  { group: 'Frameworks', items: ['Spring Boot', 'React', 'Next.js', 'Node.js', 'Express', 'Vue', 'Flask'] },
  { group: 'Databases', items: ['PostgreSQL', 'MySQL', 'Oracle', 'MongoDB', 'Redis', 'SQLite'] },
  { group: 'Tools', items: ['Git', 'Docker', 'Gradle', 'Linux', 'OpenTelemetry', 'Grafana', 'k6', 'Postman'] },
]
