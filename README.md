# Care4Paws — Pet Care Services Website

A fully responsive, single-page marketing website for **Care4Paws**, a professional pet care company offering grooming, boarding, training, and veterinary support. Built with semantic HTML5, Tailwind CSS, and vanilla JavaScript, bundled via Vite.

---

## Table of Contents

- [Project Overview](#project-overview)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Page Sections](#page-sections)
- [Design System](#design-system)
  - [Color Palette](#color-palette)
  - [Typography](#typography)
  - [Spacing](#spacing)
  - [Shadows](#shadows)
  - [Border Radius](#border-radius)
  - [Transitions](#transitions)
- [Components](#components)
- [Assets](#assets)
- [Accessibility & Standards](#accessibility--standards)
- [Browser Support](#browser-support)

---

## Project Overview

| Field       | Detail                                                                        |
|-------------|-------------------------------------------------------------------------------|
| Project     | Care4Paws                                                                     |
| Type        | Static Marketing / Landing Page                                               |
| Version     | 1.0.0                                                                         |
| License     | MIT                                                                           |
| Built by    | Pixlogix                                                                      |
| Description | Professional pet care services website — grooming, boarding, training, vet care |

---

## Tech Stack

| Technology        | Version    | Purpose                                        |
|-------------------|------------|------------------------------------------------|
| HTML5             | —          | Semantic page structure                        |
| Tailwind CSS      | ^3.4.1     | Utility-first styling framework                |
| Vanilla JS        | ES2020+    | Interactivity — sliders, menus, accordion      |
| Vite              | ^8.0.10    | Dev server & production build tool             |
| PostCSS           | ^8.4.33    | CSS processing pipeline                        |
| Autoprefixer      | ^10.4.17   | Vendor prefix automation                       |
| Font Awesome      | 6.7.2      | Icon library (CDN)                             |
| Google Fonts      | —          | Montserrat typeface (CDN)                      |

---

## Getting Started

### Prerequisites

- Node.js 18+
- npm 9+

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd Hardy-pix-main

# Install dependencies
npm install
```

### Development

```bash
npm run dev
```

Opens automatically at `http://localhost:5173` with Hot Module Replacement enabled.

### Production Build

```bash
npm run build
```

Output is written to the `dist/` folder.

### Preview Production Build

```bash
npm run preview
```

---

## Project Structure

```
Hardy-pix-main/
├── public/                          # Static assets — served at root /
│   ├── logo.webp                    # Site logo (nav + footer)
│   ├── images/
│   │   ├── favicon.ico
│   │   ├── main/                    # Hero, section backgrounds, portraits
│   │   ├── moments/                 # Gallery photos (5 images)
│   │   ├── service/                 # Service card images (5 + corner decoration)
│   │   ├── team/                    # Team member portraits (4 images)
│   │   └── update/                  # Blog / news card images (3 images)
│   └── icons/
│       ├── Info/                    # About section stat icons (4 SVGs)
│       ├── icon.svg                 # Brand accent star
│       ├── dogFoot.svg              # Decorative paw print (dark)
│       ├── dogFoot-orange.svg       # Decorative paw print (orange)
│       ├── doubleDogIcon.svg        # Decorative double dog
│       ├── haddi-light.svg          # Decorative bone (light)
│       ├── haddi-orange.svg         # Decorative bone (orange)
│       ├── pet.svg                  # Decorative pet silhouette
│       ├── quetosIcon.svg           # Quote icon (reviews section)
│       ├── icon-email.svg           # Contact — email
│       ├── icon-location.svg        # Contact — location
│       ├── icon-phone.svg           # Contact — phone
│       └── icon-time.svg            # Contact — hours
├── src/
│   ├── css/
│   │   ├── main.css                 # Tailwind directives + custom component classes
│   │   ├── variables.css            # CSS custom properties (colors, spacing, etc.)
│   │   └── fonts.css                # Google Fonts import + base font assignment
│   └── js/
│       └── main.js                  # All JS — menu, sliders, FAQ accordion, animations
├── index.html                       # Single HTML entry point
├── tailwind.config.js               # Tailwind theme (colors, shadows, fonts)
├── vite.config.js                   # Vite build + dev server config
├── postcss.config.js                # PostCSS plugin config
└── package.json
```

---

## Page Sections

| # | Section ID  | Description                                                              |
|---|-------------|--------------------------------------------------------------------------|
| 1 | *(top bar)* | Business hours, email, phone — desktop only                              |
| 2 | *(header)*  | Sticky navigation with desktop dropdowns and mobile hamburger menu       |
| 3 | `#hero`     | Full-width hero banner with headline, description, and CTA button        |
| 4 | `#about`    | Company intro with 4 animated stat counters                              |
| 5 | `#info`     | Two-column "About Us" detail with image and description                  |
| 6 | `#services` | 5 service cards — Grooming, PetsHotel, Day Camp, Training, Vet Care     |
| 7 | `#why-us`   | 3-step "How to Get Started" guide with side illustration                 |
| 8 | `#team`     | Responsive slider with 6 team member cards and social links              |
| 9 | `#reviews`  | Customer testimonials carousel (4 reviews, 2 visible on desktop)         |
| 10| `#faq`      | Accordion FAQ with 5 questions                                           |
| 11| `#moments`  | Infinite auto-scroll photo gallery (pauses on hover)                     |
| 12| `#updates`  | 3 latest blog / news article cards                                       |
| 13| `#areas`    | ZIP code service checker with embedded Google Maps                       |
| 14| *(footer)*  | Subscribe form, contact info, social links, copyright                    |

---

## Design System

### Color Palette

#### Brand Colors

| Token            | Hex       | Tailwind Class    | Usage                                        |
|------------------|-----------|-------------------|----------------------------------------------|
| Brand Primary    | `#EE6C4D` | `brand-primary`   | Coral/orange — icons, star ratings, accents  |
| Brand Blue       | `#6482AD` | `brand-blue`      | Primary CTA buttons, links                   |
| Brand Blue Hover | `#527199` | `brand-blueHover` | CTA button hover state                       |
| Brand Dark       | `#293241` | `brand-dark`      | All headings, body text, dark UI elements    |

#### UI & Background Colors

| Description        | Hex       | Usage                                            |
|--------------------|-----------|--------------------------------------------------|
| Top Bar Background | `#F8FAFD` | Info bar, dropdown hover state                   |
| White              | `#FFFFFF` | Cards, navigation, form inputs                   |
| Light Gray         | `#A0AEC0` | Secondary / muted text, stat labels              |
| Card Border        | `#E5E7EB` | Service, team, and blog card borders             |
| Review Card Border | `#E5C6BF` | Testimonial card borders                         |
| Subscribe Card BG  | `#F3F7FA` | Footer newsletter card background                |
| Subscribe Border   | `#D9E3EE` | Footer newsletter card border                    |
| FAQ Open BG        | `#F7F9FC` | Active/open FAQ button background                |
| FAQ Open Border    | `#7FA1C3` | Active/open FAQ button border                    |
| Blob Shape BG      | `#E6EFF4` | "How to Get Started" numbered blob shapes        |
| Footer Text BG     | `#1A2D42` | Subscribe card heading color                     |

---

### Typography

#### Font Family

| Font       | Source       | Weights Available              | Applied To      |
|------------|--------------|--------------------------------|-----------------|
| Montserrat | Google Fonts | 400, 500, 600, 700, 800, 900   | Every element   |

Loaded via Google Fonts CDN in `fonts.css` and mapped to the Tailwind `font-inter` alias in `tailwind.config.js`.

```css
/* fonts.css */
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap');
* { font-family: 'Montserrat', sans-serif; }
```

#### Type Scale

| Element           | Desktop Size | Mobile Size | Line Height | Weight | Usage                          |
|-------------------|-------------|-------------|-------------|--------|--------------------------------|
| `h1`              | 46px        | 24px        | 54px        | 500    | Hero headline                  |
| `h2`              | 46px        | 24–30px     | 54px        | 500    | All section headings           |
| `h3`              | 24px        | 20px        | 1.3         | 500    | Card titles, team names        |
| `h4`              | 20px        | 16px        | —           | 500    | Review author names            |
| `h5`              | 18px        | —           | —           | 500    | —                              |
| `h6`              | 16px        | —           | —           | 500    | —                              |
| Body / `p`        | 18px        | 16px        | 28px        | 400    | Section descriptions           |
| FAQ question      | 17–18px     | 17px        | 28px        | 500    | FAQ accordion button text      |
| CTA button label  | 15px        | 15px        | —           | 500    | All call-to-action buttons     |
| Blog tag / badge  | 14px        | 13px        | —           | 600    | Blog category labels, top bar  |
| Stat counter      | 36px        | 20px        | tight       | 700    | About section numbers          |
| Team role / label | 14px        | 14px        | —           | 500    | Team member role below name    |
| Footer / small    | 14–16px     | 14px        | —           | 400    | Footer contact, links          |
| Review location   | 12px        | 12px        | —           | 400    | Reviewer city / pet type       |

#### Letter Spacing

| Context             | Tailwind Class    | Value     |
|---------------------|-------------------|-----------|
| Top bar items       | `tracking-wide`   | 0.025em   |
| Review location     | `tracking-wider`  | 0.05em    |
| Section headings    | default           | 0         |

---

### Spacing

| CSS Variable    | Value         |
|-----------------|---------------|
| `--spacing-xs`  | 0.25rem (4px) |
| `--spacing-sm`  | 0.5rem (8px)  |
| `--spacing-md`  | 1rem (16px)   |
| `--spacing-lg`  | 1.5rem (24px) |
| `--spacing-xl`  | 2rem (32px)   |
| `--spacing-2xl` | 3rem (48px)   |

> Grid and card gaps use `gap-[38px]` throughout to match the Figma 12-column layout specification.

---

### Shadows

| Token / Tailwind Class | Value                                     | Usage                     |
|------------------------|-------------------------------------------|---------------------------|
| `--shadow-sm`          | `0 1px 2px 0 rgba(0,0,0,0.05)`           | Subtle lifts              |
| `--shadow-md`          | `0 4px 6px -1px rgba(0,0,0,0.1)`         | Cards                     |
| `--shadow-lg`          | `0 10px 15px -3px rgba(0,0,0,0.1)`       | Dropdowns, floating panels|
| `--shadow-xl`          | `0 20px 25px -5px rgba(0,0,0,0.1)`       | Large elevated panels     |
| `shadow-brand-btn`     | `0 4px 15px rgba(100,130,173,0.35)`       | All CTA buttons           |

---

### Border Radius

| CSS Variable  | Value          | Tailwind Equivalent | Usage                         |
|---------------|----------------|---------------------|-------------------------------|
| `--radius-sm` | 0.375rem (6px) | `rounded`           | —                             |
| `--radius-md` | 0.5rem (8px)   | `rounded-lg`        | Map container, inputs         |
| `--radius-lg` | 1rem (16px)    | `rounded-2xl`       | Cards, dropdowns, image clips |
| `--radius-xl` | 1.5rem (24px)  | `rounded-3xl`       | Subscribe card                |
| Pill          | 9999px         | `rounded-full`      | All buttons, avatar images    |

---

### Transitions

| CSS Variable          | Value              | Usage                                  |
|-----------------------|--------------------|----------------------------------------|
| `--transition-fast`   | 150ms ease-in-out  | Hover color swaps                      |
| `--transition-normal` | 300ms ease-in-out  | Button arrow rotations, icon changes   |
| `--transition-slow`   | 500ms ease-in-out  | Slider transforms                      |

---

## Components

### Navigation
- **Desktop:** Sticky top bar + nav with hover dropdown menus for "About Us" and "Services". Uses `aria-expanded`, `aria-haspopup`, and `aria-controls` for full accessibility.
- **Mobile:** `#menu-toggle` hamburger reveals a slide-down overlay with accordion dropdowns (`<ul>/<li>` semantic markup).

### CTA Button Pattern
All primary buttons follow the same pill-button structure with a rotating arrow icon:

```html
<button type="button" class="bg-brand-blue text-white pl-6 pr-2 py-[9px] rounded-full ...">
  <span>Button Label</span>
  <span class="bg-white w-8 h-8 rounded-full text-brand-primary -rotate-45 group-hover:rotate-0 transition-transform duration-300">
    <i class="fa-solid fa-arrow-right text-xs"></i>
  </span>
</button>
```

Spec: Height `50px` · Padding `9px 8px 9px 24px` · Radius `64px` · Gap `8px`

### Team Slider
- **1 slide** on mobile (< 768px) → **2 slides** on tablet → **4 slides** on desktop (≥ 1024px)
- Prev/Next buttons become `opacity-50` + `cursor-not-allowed` at boundaries
- IDs: `#teamSlider`, `#teamPrevBtn`, `#teamNextBtn`

### Reviews Carousel
- **1 card** on mobile → **2 cards** on desktop (≥ 768px)
- IDs: `#reviewSlider`, `#reviewPrevBtn`, `#reviewNextBtn`

### FAQ Accordion
- Opens one item at a time; all others close automatically
- `aria-expanded` on each trigger button for screen reader support
- Arrow icon rotates 180° on open state via Tailwind `rotate-180`

### Gallery Infinite Scroll
- CSS-only marquee using `@keyframes gallery-scroll` (18s linear infinite)
- Pauses on hover: `animation-play-state: paused`
- HTML contains 10 items (5 real + 5 clones) to create a seamless loop

### Scroll Animations
- `IntersectionObserver` API watches all `[data-animate]` elements
- Triggers `animate-fade-in-up` class (CSS `fadeInUp` keyframe, 0.5s ease-out)
- Threshold: `10%` viewport · Root margin: `-50px` bottom

---

## Assets

### Images in Use

| Folder                   | Files                                  | Section                          |
|--------------------------|----------------------------------------|----------------------------------|
| `public/`                | `logo.webp`                            | Nav & footer logo                |
| `public/images/`         | `favicon.ico`                          | Browser tab icon                 |
| `public/images/main/`    | `heroBg.webp`                          | Hero section background          |
| `public/images/main/`    | `heroImg.webp`                         | Hero section illustration        |
| `public/images/main/`    | `aboutusimg.webp`                      | About section dog image          |
| `public/images/main/`    | `userFrame1.webp`, `userFrame2.webp`   | About section profile circles    |
| `public/images/main/`    | `infoImg.webp`                         | Info / About Us section          |
| `public/images/main/`    | `serviceBg.webp`                       | Services background (desktop)    |
| `public/images/main/`    | `serviceBg-mobilescreen.jpg`           | Services background (mobile top) |
| `public/images/main/`    | `serviceBg-mobilescreen-Repeated.jpg`  | Services background (mobile body)|
| `public/images/main/`    | `startedImg.webp`                      | Why Us section illustration      |
| `public/images/main/`    | `reviewBg.webp`                        | Reviews section background       |
| `public/images/main/`    | `reviewImg.webp`                       | Reviews section left portrait    |
| `public/images/main/`    | `areaBg.webp`                          | Areas We Serve background        |
| `public/images/main/`    | `footerImg.webp`                       | Footer decorative illustration   |
| `public/images/service/` | `service (1–5).webp`, `cornerImg.webp` | Service cards                    |
| `public/images/team/`    | `member (1–4).webp`                    | Team slider + review avatars     |
| `public/images/moments/` | `moment (1–5).webp`                    | Gallery infinite scroll          |
| `public/images/update/`  | `update (1–3).webp`                    | Blog card cover images           |

### Unused Images (safe to delete)

| File                                         | Reason Unused                                         |
|----------------------------------------------|-------------------------------------------------------|
| `public/images/main/reviewBg-Mobile.jpg`     | Mobile review bg replaced by `reviewBg.webp`          |
| `public/images/main/reviewBg2.webp`          | Alternative review background — never implemented     |
| `public/images/main/serviceBgMobile.webp`    | Mobile service bg replaced by the `.jpg` pair         |
| `public/images/logo.svg`                     | `logo.webp` is used; this SVG version is unreferenced |

### Font Awesome Icons Used

`fa-bars` · `fa-xmark` · `fa-chevron-down` · `fa-arrow-right` · `fa-arrow-left` · `fa-star` · `fa-star-half-stroke` · `fa-tag` · `fa-calendar` · `fa-facebook-f` · `fa-linkedin-in` · `fa-instagram` · `fa-x-twitter` · `fa-tiktok`

---

## Accessibility & Standards

- Semantic HTML5 elements: `<header>`, `<main>`, `<footer>`, `<nav>`, `<section>`, `<article>`, `<figure>`, `<address>`, `<blockquote>`, `<time>`
- ARIA attributes: `aria-label`, `aria-expanded`, `aria-haspopup`, `aria-controls`, `aria-current`, `aria-hidden`
- All `<img>` elements have `alt` — descriptive for content images, empty (`alt=""`) for decorative ones
- Form inputs have associated `<label>` elements (visually hidden with `sr-only` where needed)
- Google Maps `<iframe>` has a `title` attribute
- Navigation dropdowns use `<ul>/<li>` list markup
- W3C HTML5 validated — no missing `alt` attributes, proper landmark regions, no stray tags

---

## Browser Support

| Browser | Minimum Version |
|---------|----------------|
| Chrome  | 90+            |
| Firefox | 88+            |
| Safari  | 14+            |
| Edge    | 90+            |

---

## Configuration Files

| File               | Purpose                                   |
|--------------------|-------------------------------------------|
| `vite.config.js`   | Dev server (port 5173), build output dir  |
| `tailwind.config.js` | Theme colors, shadows, font alias       |
| `postcss.config.js`| Tailwind + Autoprefixer plugins           |
| `src/css/variables.css` | All CSS custom properties (tokens)  |

---

*Built by [Pixlogix](https://www.pixlogix.com/)*
