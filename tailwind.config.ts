import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'media',
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './lib/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        faint: 'hsl(var(--faint))',
        primary: { DEFAULT: 'hsl(var(--primary))', foreground: 'hsl(var(--primary-foreground))' },
        muted: { DEFAULT: 'hsl(var(--muted))', foreground: 'hsl(var(--muted-foreground))' },
        destructive: 'hsl(var(--destructive))',
        card: { DEFAULT: 'hsl(var(--card))', foreground: 'hsl(var(--card-foreground))' },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 4px)',
        sm: 'calc(var(--radius) - 8px)',
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        serif: ['var(--font-serif)', 'Georgia', 'serif'],
      },
      fontSize: {
        display: ['clamp(1.9rem,5.4vw,3.6rem)', { lineHeight: '1.15', letterSpacing: '-0.02em', fontWeight: '600' }],
        heading: ['clamp(1.35rem,3vw,1.85rem)', { lineHeight: '1.25', letterSpacing: '-0.02em', fontWeight: '600' }],
        'heading-lg': ['clamp(1.6rem,3.6vw,2.2rem)', { lineHeight: '1.2', letterSpacing: '-0.02em', fontWeight: '600' }],
        title: ['1.1rem', { lineHeight: '1.35', letterSpacing: '-0.01em', fontWeight: '600' }],
        meta: ['0.8125rem', { lineHeight: '1.4' }],
        caption: ['0.6875rem', { lineHeight: '1.2' }],
        kicker: ['0.6875rem', { lineHeight: '1.2', letterSpacing: '0.04em', fontWeight: '600' }],
      },
      spacing: {
        site: 'var(--site-pad)',
        section: 'var(--section-y)',
        hero: 'var(--hero-y)',
        'hero-b': 'var(--hero-pb)',
        'section-lg': 'var(--section-lg-pt)',
        'section-lg-b': 'var(--section-lg-pb)',
        nav: 'var(--nav-h)',
      },
      transitionTimingFunction: {
        out: 'var(--ease-out)',
      },
      transitionDuration: {
        160: '160ms',
      },
      boxShadow: {
        border: 'var(--shadow-border)',
        'border-hover': 'var(--shadow-border-hover)',
      },
      scrollMargin: {
        nav: 'var(--scroll-mt)',
      },
      maxWidth: { site: '960px' },
    },
  },
}
export default config
