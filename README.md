# Luka Ramp | A/V Portfolio

A bleeding-edge, Avant-Garde web portfolio built for Luka Ramp, a Lighting, Audio, and Video Engineer based in the Netherlands.

## Tech Stack
- **Framework**: [Astro](https://astro.build)
- **CMS**: Keystatic (Markdown/JSON content management)
- **Styling**: Vanilla CSS (CSS Variables, Grid, Flexbox)
- **Animation**: GSAP (ScrollTrigger) & Lenis (Smooth Momentum Scrolling)

## Design Language
This portfolio utilizes an **Avant-Garde Hyper-Modern** aesthetic:
- **Extreme Minimalism**: Pure dark backgrounds (`#0a0a0c`) with high-contrast off-white typography and electric orange (`#ff4500`) accents.
- **Dynamic Island Navigation**: A floating, frosted-glass bottom pill replacing traditional top-navs, featuring Magnetic UI spring physics.
- **Kinetic Typography**: Massive `15vw` heading fonts that mathematically slide across the screen using GSAP scroll physics.
- **Fluid Masking Cursor**: A custom circle cursor that uses `mix-blend-mode: difference` to flawlessly invert colors beneath it.
- **Editorial Project Feed**: A structural, uncropped massive image feed to showcase event photography in its native aspect ratios without clipping.

## Local Development

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the development server (in background mode as per rules):
   ```bash
   astro dev --background
   ```
3. Open the Keystatic CMS:
   Navigate to `http://localhost:4321/keystatic` to manage Projects, About content, and Settings locally.

## Content Management (Keystatic)
- **Projects**: Located in `src/content/projects/`. Managed via CMS.
- **About Page**: Located in `src/content/about/`.
- **Global Settings**: Located in `src/content/settings/` (e.g. social links).
