import Image from 'next/image'
import { profile } from '@/lib/data'

export function ProfilePhoto() {
  return (
    <Image
      src={profile.photo}
      alt={profile.name}
      width={560}
      height={700}
      className="image-ring aspect-[4/5] w-full rounded-2xl object-cover"
      sizes="280px"
    />
  )
}
