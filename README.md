## Sammunat Motion-First SaaS Landing Page

This project is a modern, fully responsive landing page built as part of the **Sammunat frontend internship assignment**.  
It showcases a **motion-first SaaS landing** with product storytelling, pricing, testimonials, and subtle 3D-like motion.

### Tech Stack
- **Framework**: Next.js (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4 (utility-first)
- **Animations**: Framer Motion

### Key Features
- **Hero section** with animated stats, dual CTAs, and glassmorphism card
- **Feature grid** explaining value props for SaaS founders/teams
- **Interactive motion showcase** section using Framer Motion
- **Responsive pricing tiers** (Starter / Pro / Scale)
- **Testimonials** highlighting polish and motion quality
- **Strong CTA block** and **footer** linking to Sammunat’s social channels
- Fully responsive layout optimized for **mobile → desktop**

---

## Getting Started (Local Development)

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Then open `http://localhost:3000` in your browser.

The main landing page is implemented in `app/page.tsx`.  
Global theming and gradients are handled in `app/globals.css`.

---

## Build for Production

```bash
npm run build
npm start
```

This creates an optimized production build and starts the server.

---

## Deployment

You can deploy this project on any free hosting platform that supports Next.js, for example:

- **Vercel** (recommended)
- Netlify

For Vercel:
1. Push this project to a GitHub repository.
2. Go to `https://vercel.com/new`, import the repo, and select the `landing-page` project.
3. Use the default Next.js build settings (`npm run build`).

No environment variables are required for this landing page.

---

## Assignment Alignment

- Uses **Next.js + TypeScript + Tailwind CSS + Framer Motion** as requested.
- Implements a **SaaS-style landing page** with modern gradients, glassmorphism, and motion.
- Focus on **responsiveness**, **smooth animations**, and **clean typography** to reflect a professional product marketing site.
