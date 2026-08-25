import { readFile } from 'node:fs/promises'
import { join } from 'node:path'
import { ImageResponse } from 'next/og'
import { profile } from '@/lib/data'
import { siteDescription } from '@/lib/site'

export const alt = `${profile.name} — Software Engineer`
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function Image() {
  const [sans, serif] = await Promise.all([
    readFile(join(process.cwd(), 'lib/og/InstrumentSans-Medium.ttf')),
    readFile(join(process.cwd(), 'lib/og/InstrumentSerif-Italic.ttf')),
  ])

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          backgroundColor: '#000000',
          color: '#f5f5f5',
          padding: '72px 80px',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <div
            style={{
              fontFamily: 'Instrument Sans',
              fontSize: 72,
              fontWeight: 500,
              letterSpacing: '-0.04em',
              lineHeight: 1.1,
            }}
          >
            {profile.name}
          </div>
          <div
            style={{
              fontFamily: 'Instrument Serif',
              fontSize: 40,
              fontStyle: 'italic',
              color: '#c4c4cc',
            }}
          >
            Software Engineer
          </div>
        </div>
        <div
          style={{
            fontFamily: 'Instrument Sans',
            fontSize: 28,
            color: '#9a9aa3',
            maxWidth: 820,
            lineHeight: 1.35,
            letterSpacing: '-0.02em',
          }}
        >
          {siteDescription}
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: 'Instrument Sans', data: sans, weight: 500, style: 'normal' },
        { name: 'Instrument Serif', data: serif, weight: 400, style: 'italic' },
      ],
    },
  )
}
