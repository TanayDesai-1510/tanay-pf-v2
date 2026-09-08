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
  demoUrl?: string
  overview: string
  why: string
  highlights: string[]
  howItWorks: string[]
  setup: string[]
  usage: string[]
}

export const projects: Project[] = [
  {
    id: 'quotaforge',
    kicker: 'Distributed systems',
    name: 'QuotaForge',
    blurb: 'Multi-tenant rate limiter, correct under concurrent load.',
    tags: ['Java 21', 'Redis', 'OTel'],
    image: '/projects/quotaforge.webp',
    overview:
      'QuotaForge is a tenant-aware rate-limiting service designed to keep shared APIs responsive and fair under heavy traffic.',
    why:
      'A single noisy customer should not be able to consume capacity meant for everyone else. QuotaForge makes limits explicit, shared across instances, and safe under concurrent requests.',
    highlights: [
      'Tenant-specific quotas and burst limits',
      'Atomic Redis-backed counters for consistent decisions',
      'OpenTelemetry instrumentation for traces and metrics',
    ],
    howItWorks: [
      'A request is identified by its tenant and the resource it wants to use.',
      'QuotaForge checks and updates the shared Redis counter atomically, so concurrent service instances agree on the result.',
      'The service returns an allow or reject decision together with enough metadata for a client to retry responsibly.',
    ],
    setup: [
      'Clone the project repository and install the Java 21 toolchain.',
      'Start a local Redis instance for shared quota state.',
      'Set the Redis connection and OpenTelemetry settings for your environment.',
      'Start the service with the repository\'s Gradle wrapper.',
    ],
    usage: [
      'Define a quota for each tenant or API resource.',
      'Send incoming requests through the limiter before they reach the protected service.',
      'Use the returned decision and retry metadata to provide clear feedback to clients.',
      'Inspect telemetry to tune limits and find traffic spikes.',
    ],
  },
  {
    id: 'signalwatch',
    kicker: 'AI + full-stack',
    name: 'SignalWatch',
    blurb: 'Ingests market filings, scores them with Claude, alerts live.',
    tags: ['Next.js', 'Prisma', 'SSE'],
    image: '/projects/signalwatch.webp',
    demoUrl: 'https://signalwatch-india.vercel.app',
    overview:
      'SignalWatch turns market filings into a focused stream of signals, using AI-assisted scoring to help people notice important updates faster.',
    why:
      'Filings are valuable but time-consuming to monitor manually. SignalWatch brings ingestion, prioritization, and live updates into one workspace so users can spend more time evaluating decisions and less time searching.',
    highlights: [
      'Filing ingestion and normalized data storage',
      'Claude-powered relevance scoring',
      'Live updates delivered with server-sent events',
    ],
    howItWorks: [
      'New filings are ingested and stored through the application data layer.',
      'Claude evaluates the filing content and produces a signal score with useful context.',
      'The dashboard streams new signals to connected users so the feed stays current without manual refreshes.',
    ],
    setup: [
      'Open the live demo above, or clone the project repository.',
      'Install the Node.js dependencies with npm install.',
      'Configure the database connection and Claude API key in your local environment.',
      'Run the Prisma migrations, then start the Next.js development server with npm run dev.',
    ],
    usage: [
      'Open the dashboard to review the latest ingested filings.',
      'Select a signal to see its score, source filing, and explanation.',
      'Keep the dashboard open to receive live updates as new filings arrive.',
    ],
  },
  {
    id: 'routemesh',
    kicker: 'Platform',
    name: 'RouteMesh',
    blurb: 'API gateway with discovery, circuit breakers, live telemetry.',
    tags: ['Spring Cloud', 'Kafka', 'Grafana'],
    image: '/projects/routemesh.webp',
    overview:
      'RouteMesh is a service-platform project that gives distributed applications one reliable entry point for routing, resilience, and observability.',
    why:
      'As a system grows, every service should not have to solve discovery, failure handling, and traffic visibility independently. RouteMesh centralizes those concerns while keeping downstream services easier to operate.',
    highlights: [
      'Service discovery and request routing',
      'Circuit breakers for failing downstream services',
      'Kafka-backed events and Grafana-ready telemetry',
    ],
    howItWorks: [
      'A client sends a request to the gateway instead of addressing an individual service directly.',
      'RouteMesh discovers a healthy destination and forwards the request using the configured routing rules.',
      'Circuit breakers stop repeated calls to an unhealthy service and recover when it becomes available again.',
      'Operational events and metrics make traffic, latency, and failures visible in the telemetry stack.',
    ],
    setup: [
      'Clone the project repository and install the Java 21 toolchain.',
      'Start the local Kafka and service-discovery dependencies.',
      'Configure routes, downstream service addresses, and telemetry exporters.',
      'Start the gateway and example services with the repository\'s build commands.',
    ],
    usage: [
      'Register or configure a downstream service and give it a route.',
      'Send client traffic to the gateway URL rather than directly to the service.',
      'Simulate a downstream failure to see the circuit breaker protect callers.',
      'Use Grafana dashboards and emitted events to inspect the request path.',
    ],
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
