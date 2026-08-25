# Tanay Desai — Portfolio

Next.js 14 (App Router) + Tailwind. Dark/light via `prefers-color-scheme`, fully responsive, reduced-motion safe.

## Run

```bash
npm install
npm run dev      # http://localhost:3003
npm run build    # production build
npm start        # serve the build on port 3003
```

## Edit content

Everything lives in `lib/data.ts`. Change your projects, experience, education,
skills, nav links, and profile links there. No need to touch the components.

## Replace the photo

Put a WebP in `public/` (for example `public/profile.webp`) and set `photo` in
`lib/data.ts` to that path.

## Replace the resume

Put your resume PDF in `public/` and set `resume` in `lib/data.ts` to its path,
for example `/Resume_Tanay_Desai.pdf`.

## Structure

- `app/layout.tsx` owns fonts, metadata, nav, and footer.
- `app/page.tsx` composes the sections.
- `components/` holds each section and the mobile nav.
- Theme tokens are in `app/globals.css`.
- Site URL, Open Graph, and JSON-LD live in `lib/site.ts`. Set `NEXT_PUBLIC_SITE_URL` in production if you use a custom domain.

## Fonts

Instrument Sans (400/600) and Instrument Serif italic load through `next/font/google` in `app/layout.tsx`.

## Deploy

Push to GitHub and import into Vercel, or run `npm run build` and host anywhere
that runs Node.
