# Ember & Oak Burgers

## Project Overview
Full brutalist restaurant landing page for "Ember & Oak Burgers" — a smash burger restaurant. Built with React + Vite + TypeScript + Framer Motion + CSS Modules.

## Design Tokens
```css
--black:  #0D0D0D;
--white:  #FAFAFA;
--red:    #E8200A;
--orange: #FF7B00;
--yellow: #FFE500;
--char:   #1A1A1A;
--smoke:  #2E2E2E;
```

## Fonts (loaded via Google Fonts in index.html)
- Bebas Neue — display headings
- Anton — buttons, stamps
- Courier Prime — body, menu codes
- Space Grotesk — nav, authors

## Architecture
- **Framework**: React 18 + Vite 5 + TypeScript
- **Animations**: Framer Motion (scroll-triggered, whileInView once: true)
- **Styling**: CSS Modules — no Tailwind, no styled-components
- **Dev server**: port 5000, host 0.0.0.0

## Project Structure
```
src/
├── components/
│   ├── Navbar/       — Fixed yellow navbar, hamburger mobile menu
│   ├── Hero/         — Two-col hero with staggered load animations
│   ├── Ticker/       — Infinite scroll red ticker bar
│   ├── Menu/         — 6-item menu grid with invert-on-hover cards
│   ├── About/        — Stats count-up + quote block
│   ├── Gallery/      — Irregular CSS Grid photo gallery
│   ├── Testimonials/ — Yellow bg testimonial cards
│   ├── CTA/          — Red CTA with ghost "EAT" text
│   ├── Contact/      — Two-col contact + form
│   └── Footer/       — Black footer with yellow top border
├── styles/
│   └── globals.css   — CSS design tokens + reset
├── App.tsx
└── main.tsx
```

## Running
```
npm run dev     # dev server on :5000
npm run build   # production build → dist/
```
