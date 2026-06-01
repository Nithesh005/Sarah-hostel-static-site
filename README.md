# XYZ Men's Hostel — Website

Next.js marketing site for a men's hostel. All business content is driven from config and data files—no backend required.

## Quick start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Update your hostel details

Edit **[config/site.config.ts](config/site.config.ts)** for:

- Hostel name, tagline, description
- Phone, WhatsApp, email
- Full address
- Logo path (`public/logo.svg`)
- Hero image and **gallery** image list
- **Google Maps** embed URL and directions link

Edit **[data/pricing.ts](data/pricing.ts)**, **[data/menu.ts](data/menu.ts)**, **[data/rules.ts](data/rules.ts)** for rates, food menu, and policies.

### Gallery photos

1. Add images to `public/gallery/`
2. Update the `gallery` array in `config/site.config.ts` with `src`, `alt`, and `category`

### Developer credit (footer watermark)

In `config/site.config.ts`, update the `developer` block:

```ts
developer: {
  show: true,
  name: "Your Name",
  linkedInUrl: "https://www.linkedin.com/in/your-profile",
},
```

Set `show: false` to hide it.

### Google Maps

1. Open [Google Maps](https://maps.google.com), find your hostel
2. Share → **Embed a map** → copy the `src` URL into `siteConfig.map.embedUrl`
3. Set `map.directionsUrl` to your share link for “Get directions”

## Deploy on Vercel

1. Push this folder to GitHub
2. Import the repo at [vercel.com](https://vercel.com)
3. Add environment variable: `NEXT_PUBLIC_SITE_URL` = your production URL
4. Deploy

## Build

```bash
npm run build
npm start
```
