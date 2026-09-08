import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight01Icon } from '@hugeicons/core-free-icons'
import { Icon } from './icon'
import { Card, CardBody, CardDescription, CardMedia } from './ui/card'
import { Badge } from './ui/badge'
import { Heading } from './ui/heading'
import { Kicker } from './ui/kicker'
import type { Project } from '@/lib/data'

export function ProjectCard({ project: p }: { project: Project }) {
  const card = (
    <Card interactive>
      <CardMedia>
        <Image
          src={p.image}
          alt=""
          fill
          className="image-ring object-contain p-3"
          sizes="(min-width: 1024px) 280px, (min-width: 640px) 45vw, 100vw"
        />
      </CardMedia>
      <CardBody>
        <Kicker className="mb-1.5">{p.kicker}</Kicker>
        <div className="mb-1.5 flex items-center justify-between gap-2">
          <Heading as="h3" size="title">
            {p.name}
          </Heading>
          <Icon icon={ArrowUpRight01Icon} className="text-faint" />
        </div>
        <CardDescription className="mb-3">{p.blurb}</CardDescription>
        <div className="flex flex-wrap gap-1.5">
          {p.tags.map((t) => (
            <Badge key={t}>{t}</Badge>
          ))}
        </div>
      </CardBody>
    </Card>
  )

  return (
    <Link href={`/projects/${p.id}`} aria-label={`View ${p.name} project details`} className="group block h-full">
      {card}
    </Link>
  )
}
