# Tanay Desai — Portfolio

Next.js (App Router) + Tailwind + shadcn/ui + Framer Motion. Plain black theme, fully responsive, reduced-motion safe.

## Run

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm start        # serve the build
```

## Edit content

Everything lives in `lib/data.ts`. Change your projects, experience, education,
skills, and links there. No need to touch the components.

## Add your photo (beside the contact form)

1. Drop your image in `public/`, for example `public/tanay.jpg`.
2. In `lib/data.ts`, set `photo: '/tanay.jpg'`.
That is it. The contact section shows the placeholder until `photo` is set,
then swaps in your image automatically.

## Replace the resume

Put your resume PDF in `public/` and set `resume` in `lib/data.ts` to its path,
for example `/TanayDesaiResume.pdf`.

## Structure

- `app/page.tsx` composes the sections.
- `components/` holds each section (nav, hero, projects, experience, education, skills, contact, footer).
- `components/ui/` holds the shadcn primitives (button, input, textarea, card). Add more with `npx shadcn@latest add <name>`.
- `components/reveal.tsx` is the Framer Motion scroll-reveal helper.
- Theme tokens are in `app/globals.css`.

## Fonts

Instrument Sans and Instrument Serif load from Google Fonts via a link in
`app/layout.tsx`. If you prefer self-hosted optimized fonts, switch to
`next/font/google`; it works locally since you have network access.

## Deploy

Push to GitHub and import into Vercel, or run `npm run build` and host anywhere
that runs Node.
