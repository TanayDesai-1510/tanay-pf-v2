export const profile = {
  name: 'Tanay Desai',
  email: 'tanaydesai2004@gmail.com',
  github: 'https://github.com/TanayDesai-1510',
  linkedin: 'https://linkedin.com/in/tanaydesai1510/',
  resume: '/Resume_Tanay_Desai.pdf', // replace with Tanay's resume file in /public
  photo: '/profile.jpg', // set to e.g. '/tanay.jpg' after adding the file to /public
}

export type Project = { id: string; kicker: string; name: string; blurb: string; tags: string[]; icon: 'sliders' | 'trend' | 'graph'; image?: string; href?: string }
export const projects: Project[] = [
  // to add an image: drop the file in /public/projects (e.g. public/projects/quotaforge.png)
  // and set image: '/projects/quotaforge.png' below.
  { id: 'quotaforge', kicker: 'Distributed systems', name: 'QuotaForge', blurb: 'Multi-tenant rate limiter, correct under concurrent load.', tags: ['Java 21', 'Redis', 'OTel'], icon: 'sliders', image: '/projects/quotaforge.png' },
  { id: 'signalwatch', kicker: 'AI + full-stack', name: 'SignalWatch', blurb: 'Ingests market filings, scores them with Claude, alerts live.', tags: ['Next.js', 'Prisma', 'SSE'], icon: 'trend', image: '/projects/signalwatch.png' },
  { id: 'routemesh', kicker: 'Platform', name: 'RouteMesh', blurb: 'API gateway with discovery, circuit breakers, live telemetry.', tags: ['Spring Cloud', 'Kafka', 'Grafana'], icon: 'graph', image: '/projects/routemesh.png' },
]

export const experience = [
  { org: 'Rutgers OIT', role: 'Software Engineer', period: 'Feb 2024 – Present' },
  { org: 'Vertex Inc.', role: 'Software Engineering Intern, Backend', period: 'Jun – Aug 2026' },
  { org: 'SkillsVista', role: 'Front End Engineering Intern', period: 'Jul – Aug 2022' },
]

export const education = [
  { school: 'Rutgers University, New Brunswick', degree: 'B.S. Computer Science, minor in Data Science', period: 'Sep 2023 – May 2027' },
  { school: 'Shri Bhagubhai Mafatlal Polytechnic', degree: 'Diploma, Information Technology', period: 'Dec 2020 – Jun 2023' },
]

export const skills = [
  { group: 'Languages', items: ['Java', 'Python', 'C/C++', 'JavaScript', 'TypeScript', 'SQL', 'HTML/CSS'] },
  { group: 'Frameworks', items: ['Spring Boot', 'React', 'Next.js', 'Node.js', 'Express', 'Vue', 'Flask'] },
  { group: 'Databases', items: ['PostgreSQL', 'MySQL', 'Oracle', 'MongoDB', 'Redis', 'SQLite'] },
  { group: 'Tools', items: ['Git', 'Docker', 'Gradle', 'Linux', 'OpenTelemetry', 'Grafana', 'k6', 'Postman'] },
]
