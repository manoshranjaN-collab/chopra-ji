# Master Prompt — Premium Local-Business Landing Site

Copy everything in the fenced block below into a fresh Claude Code / AI session to
generate a new client website with the same architecture, fonts, and style as the
Dr Lipsa Dental site. Fill in the bracketed `[[ ... ]]` placeholders before sending.

---

```
You are building a premium, single-page marketing website for a local business.
Match the architecture, design system, and code conventions described below EXACTLY.
The result must look hand-crafted and editorial — NOT like an AI/template site.

=====================================================================
1. THE BUSINESS (fill these in)
=====================================================================
- Business name:        [[e.g. Aria Skin & Laser Clinic]]
- Owner / lead person:  [[e.g. Dr Aria Mehta]]
- Industry:             [[dental / dermatology / salon / gym / cafe / law / etc.]]
- City / locality:      [[e.g. Bandra West, Mumbai]]
- One-line positioning: [[e.g. Calm, modern skincare backed by science]]
- Phone:                [[number]]      Email: [[email or "none"]]
- Address:              [[full address]]
- Google rating:        [[e.g. 4.9]]    Reviews: [[count]]
- Google Maps embed/link, Instagram, other socials (or "TODO")
- Real assets the client will provide: [[portrait, video (9:16?), patient/work
  photos, before/after pairs — list what exists, leave the rest as placeholders]]

If any fact is unknown, DO NOT invent it. Use a clearly-marked placeholder and add
a `// TODO: confirm` comment. Never fabricate credentials, prices, hours, or stats.

=====================================================================
2. TECH STACK (use exactly this)
=====================================================================
- Next.js 14 (App Router) + React 18 + TypeScript
- Tailwind CSS v3
- lucide-react (icons), clsx (conditional classes)
- No other UI libraries. No CSS-in-JS. Static export friendly.
- Deploy target: Vercel.

package.json deps to match:
  next 14.2.x, react 18.3.x, react-dom 18.3.x, lucide-react ^0.46x, clsx ^2.1
  dev: tailwindcss ^3.4, postcss, autoprefixer, typescript 5.6, @types/*

=====================================================================
3. ARCHITECTURE (the core idea)
=====================================================================
ALL content lives in ONE file: `lib/site.ts`. Components read from it; they never
hard-code business facts. This is what makes the template reskinnable in minutes.

`lib/site.ts` exports:
  - `site`        : object — name, owner, tagline, phone, phoneHref, whatsapp,
                    email, address, shortAddress, hours, rating, reviewCount,
                    googleMaps (embed url), googleMapsLink, attributes[], social{}
  - `Service` type + `services: Service[]`  (slug, name, short, description,
                    longDescription, duration, startingPrice, highlights[], faqs[])
  - `VideoTestimonial` type + `videoTestimonials[]` (id, name, location,
                    treatment, quote, src, poster)  — src/poster "" => placeholder
  - `PatientPhoto` type + `patientPhotos[]` (id, src, alt, span)  — collage
  - `BeforeAfterCase` type + `beforeAfterCases[]` (id, title, treatment,
                    before, after)
  - `faqs` array (q, a)
Rename "patient"/"treatment"/"service" to fit the industry (e.g. "client",
"member", "menu item") but KEEP the same data-driven shape.

File tree to produce:
  app/layout.tsx            — fonts + <Metadata>, wraps body
  app/globals.css           — Tailwind layers + component classes (below)
  app/page.tsx              — imports & orders all sections
  app/not-found.tsx         — branded 404
  app/services/[slug]/page.tsx — dynamic detail page per service (generateStaticParams)
  components/Header.tsx      — fixed, transparent->cream on scroll, bold nav, mobile menu
  components/Hero.tsx        — paper texture bg, big headline w/ accent words, image card
  components/Marquee.tsx     — infinite scrolling keyword strip
  components/Services.tsx    — grid of service cards linking to detail pages
  components/About.tsx       — owner portrait + bio + credential badges
  components/VideoTestimonials.tsx — 9:16 portrait player (poster + play), quote
  components/PatientCollage.tsx    — gallery grid of real photos (object-cover)
  components/Gallery.tsx     — Before/After DRAG-SLIDER (clip-path reveal, touch+keys)
  components/Reviews.tsx     — Google-style review cards, rating header
  components/Booking.tsx     — appointment/contact form + trust bullets
  components/FAQ.tsx         — accordion
  components/Contact.tsx     — address, hours, embedded map
  components/Footer.tsx      — columns, socials, legal
  components/MobileCTA.tsx   — sticky bottom call/book bar on mobile
Add/remove sections to fit the industry (e.g. restaurant => Menu instead of Services;
gym => Class Schedule). Keep each section self-contained and data-driven.

=====================================================================
4. DESIGN SYSTEM — TYPOGRAPHY (this is the signature look)
=====================================================================
- Headings + body: a clean neutral SANS via a native stack — Helvetica Neue first:
    sans: ['"Helvetica Neue"', "Helvetica", '"Inter"', "Arial", "ui-sans-serif",
           "system-ui", "sans-serif"]
- Accent: a refined EDITORIAL SERIF ITALIC, loaded with next/font/google, used ONLY
  for 1–3 highlighted words inside headings. Default: Newsreader (italic, 400/500).
    In layout.tsx:  Newsreader({ subsets:["latin"], variable:"--font-accent",
      style:["italic"], weight:["400","500"], display:"swap",
      fallback:["Georgia","serif"], adjustFontFallback:false })
    Tailwind:  accent: ['var(--font-accent)', "Georgia", "ui-serif", "serif"]
- Headings are font-bold + tracking-tight, sentence case (NOT all-caps).
- The Helvetica-bold + serif-italic contrast is the whole aesthetic. Use it on every
  section headline: e.g.  Real smiles. <span class="accent text-[brandTeal]">Real</span> patients.
- Bumped base font scale (so nothing feels tiny):
    xs 13px, sm 15px, base 17px, lg 19px (with matching line-heights)
- Display sizes via clamp():
    display-xl: clamp(2.6rem,6vw,5.25rem)  lh .98  tracking -.035em
    display-lg: clamp(2.1rem,4.5vw,3.75rem) lh 1.0 tracking -.03em
    display-md: clamp(1.75rem,3vw,2.6rem)  lh 1.05 tracking -.025em

=====================================================================
5. DESIGN SYSTEM — COLOR (reskin per client)
=====================================================================
Define a small token palette in tailwind.config.ts `theme.extend.colors`.
Keep the SAME ROLES, swap the hex values to match the client's brand:

  cream  (warm off-white bg)      50/100/200    — page & card backgrounds
  ink    (near-black text)        DEFAULT/soft/muted — all text
  <brand> (primary, e.g. teal)    50/100/400/500/600/700 — buttons, accents, links
  <accent2> (warm pop, e.g. gold) 300/400/500   — highlights, "After" chip
  line   (#E5DDCB hairline)                      — borders/dividers

Dr Lipsa palette (reference — change for new clients):
  cream 50 #FBF8F2 / 100 #F6F0E4 / 200 #EDE2CC
  ink #0E2A2A / soft #1F3A3A / muted #5A6E6E
  teal 50 #E8F0EE /100 #C9DCD7 /400 #3F7A6E /500 #1F5F55 /600 #164A42 /700 #0E3530
  gold 300 #E9C77A /400 #D9AE54 /500 #C39538
  line #E5DDCB
To reskin: pick a new "brand" ramp + one "accent2" pop color; keep cream/ink/line
neutral (or shift cream cooler for a clinical look, warmer for hospitality).

=====================================================================
6. DESIGN SYSTEM — COMPONENT CLASSES (in globals.css @layer components)
=====================================================================
  .btn          rounded-full px-6 py-3 text-sm font-medium tracking-tight, smooth transition
  .btn-primary  brand-600 bg, cream text, darker on hover
  .btn-secondary transparent + ink border, inverts on hover
  .btn-gold     accent2 bg, ink text
  .eyebrow      BIG bold sans kicker: block font-bold tracking-tight text-2xl
                sm:text-3xl leading-none text-brand-600  (NOT small all-caps!)
  .accent       font-accent italic font-normal, slight negative tracking
  .section      py-20 sm:py-28
  .hairline     border-t border-line
  .card         rounded-2xl bg-white/60 backdrop-blur-sm border border-line shadow-card
  .chip         small rounded-full pill, border-line, bg-white/70
Shadows: card (soft), cardLg (lifted). Radii: xl 1rem, 2xl 1.5rem, 3xl 2rem.
.paper = subtle radial-dot texture for the hero background.
Base: body bg-cream-50 text-ink antialiased font-sans; h1–h4 bold + tracking-tight;
::selection brand-tinted; smooth scroll.

=====================================================================
7. ANTI-"AI-SLOP" RULES (do all of these)
=====================================================================
- NO hand-drawn squiggle underlines, NO fake signature scribbles.
- NO floating/animated gradient "blobs" behind the hero.
- NO tiny ALL-CAPS wide-letter-spaced kicker labels (that's the #1 template tell).
  Use the big bold .eyebrow instead.
- NO emoji as section icons; use lucide-react line icons sparingly.
- Sentence case headings, real copy, generous whitespace, restrained motion.
- One marquee is fine; keep animations subtle (40s linear, slow).
- Highlight only 1–3 words per headline with the serif italic .accent.

=====================================================================
8. PLACEHOLDER / ASSET STRATEGY
=====================================================================
- Real assets go in /public:  /videos, /posters, /patients, /cases, root portrait.
- Every media slot must DEGRADE GRACEFULLY: if src is "", render an on-brand
  placeholder tile (cream/brand background, label, lucide icon) — NEVER a broken
  image and NEVER a random Unsplash URL (they 404 and look fake).
- For Before/After: ship neutral SVG placeholder tiles in /public/cases so the
  drag-slider works before real photos exist.
- Wire every asset path through lib/site.ts so swapping in real files = edit one file.
- Video player is 9:16 portrait by default (phone-shot clips); poster frame shown
  before play; native <video controls> on click.

=====================================================================
9. QUALITY BAR & DELIVERY
=====================================================================
- Fully responsive (mobile-first), accessible (alt text, aria on slider/menu,
  keyboard support), fast (static, no heavy libs).
- Flag missing auth/security only if you add network endpoints.
- After building: run `npm run build`; it must pass clean. Fix any TS/lint errors.
- IMPORTANT dev note: never run `npm run build` while `npm run dev` is running on
  the same folder — it corrupts .next and 404s the chunks. Stop dev, rm -rf .next,
  build, then restart dev.
- Provide: the file tree, lib/site.ts filled with the client's content (placeholders
  where unknown), all components, config, and a short README listing where to drop
  real assets and which TODOs remain.

Build the complete site now. Start by reading the brief, then scaffold lib/site.ts,
then the config + globals, then components in page order, then verify the build.
```

---

## How to use this

1. Copy the fenced block into a new session.
2. Replace every `[[ ... ]]` with the client's real info (or "TODO").
3. Pick the color palette: swap the `brand` and `accent2` hex ramps.
4. Add/remove sections in section 3 to fit the industry.
5. Send it. Then drop the client's real photos/video into `/public` and update `lib/site.ts`.

## Fast reskin checklist (when cloning this exact repo instead of regenerating)
- [ ] Rename project in `package.json`
- [ ] Swap color ramps in `tailwind.config.ts` (brand + accent2)
- [ ] Optionally change the accent serif font in `app/layout.tsx`
- [ ] Rewrite all content in `lib/site.ts`
- [ ] Replace `/public` assets (portrait, video, posters, patients, cases)
- [ ] Update `app/layout.tsx` metadata (title/description/OG)
- [ ] Add/remove sections in `app/page.tsx` + `components/Header.tsx` nav
- [ ] `npm run build` to verify, then `vercel deploy --prod`
