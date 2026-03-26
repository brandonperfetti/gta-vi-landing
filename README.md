# GTA VI Landing Page

<div align="center">

<img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black" />
<img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" />
<img src="https://img.shields.io/badge/GSAP-88CE02?style=for-the-badge&logo=greensock&logoColor=black" />
<img src="https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" />
<img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white" />

**A cinematic, animation-driven recreation of the Grand Theft Auto VI landing page.**

[Live Demo](https://gta-vi-landing.vercel.app) · [Report Bug](https://github.com/brandonperfetti/gta-vi-landing/issues)

</div>

---

## Overview

This project is a high-fidelity recreation of the **GTA VI promotional landing page**, built as a deep-dive exercise in advanced web animation. It demonstrates mastery of **GSAP ScrollTrigger**, scroll-based video scrubbing, pin-scroll sequences, parallax layering, and responsive motion design — all without a single CSS keyframe animation.

The experience is built with React, TypeScript, and Tailwind CSS, and showcases what's possible at the intersection of frontend engineering and motion design.

---

## Features

- 🎬 **Scroll-Driven Video Playback** — Video progress is tied directly to the user's scroll position via GSAP ScrollTrigger
- 📌 **Pinned Scroll Sequences** — Sections lock into place while animations play out before releasing the user
- 🌊 **Parallax Layering** — Multi-depth parallax effects on hero assets create cinematic depth
- 📱 **Responsive Breakpoints** — Mobile-first layout with `react-responsive` for targeted breakpoint logic
- ⚡ **GSAP-Powered Motion** — All animations run at 60fps via GSAP's optimized rendering pipeline
- 🎨 **Cinematic UI** — Dark, immersive aesthetic matching the GTA VI brand identity

---

## Tech Stack

| Technology | Purpose |
|---|---|
| [React](https://reactjs.org/) | Component-based UI architecture |
| [TypeScript](https://www.typescriptlang.org/) | Type-safe development |
| [GSAP](https://gsap.com/) + ScrollTrigger | Scroll-driven animations and pinning |
| [@gsap/react](https://gsap.com/resources/React/) | React integration for GSAP |
| [Tailwind CSS](https://tailwindcss.com/) | Utility-first styling |
| [Vite](https://vitejs.dev/) | Fast build tooling with HMR |
| [react-responsive](https://github.com/yocontra/react-responsive) | Responsive breakpoint hooks |

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v18+
- [npm](https://www.npmjs.com/)

### Installation

```bash
git clone https://github.com/brandonperfetti/gta-vi-landing.git
cd gta-vi-landing
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Production Build

```bash
npm run build
npm run preview
```

### Linting

```bash
npm run lint
```

---

## Project Structure

```
gta-vi-landing/
├── src/
│   ├── components/       # Page sections and animation components
│   ├── constants/        # Animation config, asset paths
│   └── main.tsx          # App entry point
├── public/               # Static media assets (video, images)
├── constants/            # Shared constants
└── index.html
```

---

## What I Learned

This project was built as part of a web animations course focused on production-grade GSAP techniques. Key takeaways:

- **ScrollTrigger pinning** for creating multi-phase scroll sequences
- **Video scrubbing** — mapping `currentTime` to scroll progress for smooth playback
- **GSAP timeline composition** for orchestrating complex multi-element sequences
- **Performance optimization** — reducing repaints with `will-change` and `transform`-only animations

---

## Deployment

Deployable to Vercel or Netlify with zero configuration.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/brandonperfetti/gta-vi-landing)

---

## License

MIT © [Brandon Perfetti](https://brandonperfetti.com)
