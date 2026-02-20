# Sellatica Website

Premium, mobile-first landing and conversion site for Sellatica.

## Stack

- Vite + React + TypeScript
- Tailwind CSS + Framer Motion
- React Router
- react-helmet-async for SEO metadata

## Local Development

```bash
npm install
npm run dev
```

## Build + Prerender

```bash
npm run build
```

Build command runs:
1. Vite production build
2. Static prerender snapshots for routes (`/`, `/about`, `/services`, `/results`, `/contact`, `/faq`)

## Tests

```bash
npm run test
```

## Required Environment Variables

Create a `.env` file in the project root with:

```bash
VITE_CONTACT_WEBHOOK_URL=https://n8n.sellatica.in/webhook/sellatica/company-contact-web-v1
```

## SEO + AEO Assets

- `public/robots.txt`
- `public/sitemap.xml`
- `public/llms.txt`
- Per-page structured data generated in page components via `src/lib/structuredData.ts`

## Deployment Checklist

1. Run `npm run build`
2. Verify prerendered route files in `dist/`
3. Deploy to hosting
4. Submit updated sitemap in Google Search Console (`https://www.sellatica.in/sitemap.xml`)
5. Request recrawl for key pages after major copy/UI updates
