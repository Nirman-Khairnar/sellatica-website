# Sellatica Website

Main public website for `sellatica.in`.

## Stack

- Vite
- React
- TypeScript
- Tailwind CSS
- shadcn-ui
- Cloudflare Pages

## Local Development

```sh
npm install
npm run dev
```

## Environment

Use `.env` locally. Public frontend env expectations are documented in `.env.example`.

Current important runtime variables:

- `VITE_TURNSTILE_SITE_KEY`
- `VITE_CONTACT_WEBHOOK_URL`
- `VITE_DIAGNOSTIC_LEAD_WEBHOOK_URL`
- `VITE_RAZORPAY_ORDER_WEBHOOK_URL`
- `VITE_RAZORPAY_VERIFY_WEBHOOK_URL`
- `VITE_CALCOM_BOOKING_URL`

Legacy compatibility:

- `VITE_SUPABASE_URL`
- `VITE_SUPABASE_ANON_KEY`

## Backend Boundary

The website is moving toward an always-on webhook/runtime model:

- contact form -> webhook endpoint
- diagnostic lead capture -> webhook endpoint
- Razorpay order creation -> webhook endpoint
- Razorpay payment verification -> webhook endpoint
- calendar redirect -> Cal.com

If the diagnostic webhook endpoints are not configured yet, the site can still fall back to the older Supabase edge function path for the diagnostic flow.

## Deployment

Cloudflare Pages build settings:

- build command: `npm run build`
- output directory: `dist`
