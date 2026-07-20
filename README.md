# Built Different 3.0 — Website

Cut-throat, conversion-optimized landing page for **Built Different 3.0** (October 24–25, 2026 · Tirana) — founder Pasquale Minasi.

## Develop

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment

| Variable | Purpose |
|---|---|
| `NEXT_PUBLIC_STRIPE_STANDARD` | Standard tier checkout URL |
| `NEXT_PUBLIC_STRIPE_VIP` | VIP tier checkout URL |
| `NEXT_PUBLIC_STRIPE_ELITE` | Elite tier checkout URL |
| `NEXT_PUBLIC_WHATSAPP` | WhatsApp number (digits only, e.g. `355691234567`) — enables floating chat button |
| `NEXT_PUBLIC_CONTACT_EMAIL` | Contact email shown in footer / forms |
| `NEXT_PUBLIC_VIDEO_PASQUALE` | YouTube ID for main experience video |
| `NEXT_PUBLIC_VIDEO_ANDY` | YouTube ID for Andy Elliott endorsement (falls back to Pasquale video) |
| `NEXT_PUBLIC_EARLY_BIRD_DEADLINE` | ISO date for countdown timer |

## Client assets

Drop production files into `public/assets/` — see [public/assets/README.md](./public/assets/README.md).

| Path | Use |
|---|---|
| `pasquale/hero.jpg` | Founder section hero portrait |
| `pasquale/stage.jpg` | On-stage photography |
| `pasquale/headshot.jpg` | Tight crop |
| `events/bd20-*.jpg` | Moments gallery stills |
| `testimonials/attendee-*.jpg` | Video testimonial posters |

Until files are added, Pasquale uses [unavatar.io](https://unavatar.io) as fallback; moments link to Instagram/YouTube.

## Deploy

```bash
npm run build
npm start
```

Deploy to [Vercel](https://vercel.com) — connect the `web` directory.

## Before launch checklist

- [ ] Stripe links for all 3 tiers (VIP + Elite)
- [ ] WhatsApp number for float + capture funnel
- [ ] Founder photography in `public/assets/pasquale/`
- [ ] Named attendee video quotes (replace `[CONFIRM]` placeholders in `src/lib/content.ts`)
- [ ] BD 3.0 venue confirmation
- [ ] Real refund policy at `/legal/refund`
- [ ] Wire capture form to CRM / Mailchimp
- [ ] Point @builtdifferent.official bio to production domain

## Stack

Next.js 16 · Tailwind v4 · Motion · Anton + DM Sans · Lucide icons

## Page structure

Hero → Credentials → Andy endorsement → Qualifier → Experience → Legacy → Moments → Voices → Success stories → Speakers → Agenda → Pricing → Founder → Capture → FAQ → Final CTA
