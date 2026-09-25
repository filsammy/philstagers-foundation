# Philippine Stagers Foundation — Website

A focused Next.js showcase site for PSF: their message to the audience, current
and past shows, and a photo/video gallery of their work. No CMS — content
lives in plain data files so it's easy to read and edit directly.

## Stack
- **Next.js 16** (App Router)
- Plain CSS (no framework) — all design tokens in `src/app/globals.css`

## 1. Local setup

```bash
npm install
npm run dev
```

Site: http://localhost:3000

## 2. Updating content

There's no admin panel — edit these files directly and redeploy:

- **Shows** — `src/data/shows.ts`. Each entry has a title, poster image path,
  schedule text, description, and `status` (`current`, `upcoming`, or
  `archived`). Add or remove entries directly in the array.
- **Poster images** — drop the image file into `public/shows/` with the
  filename referenced in `poster` (e.g. `public/shows/san-vicente.jpg`).
- **Gallery photos/videos** — `src/data/media.ts`. Add an entry per file
  (`type: 'image'` or `type: 'video'`) and drop the matching file into
  `public/gallery/`.
- **About/Contact copy** — edit directly in
  `src/app/(site)/about/page.tsx` and `src/app/(site)/contact/page.tsx`.

## 3. Deploying to Vercel

1. Push this repo to GitHub.
2. On [vercel.com](https://vercel.com), **Add New Project** → import the repo.
3. Deploy. No environment variables needed.

## 4. Custom domain

In the Vercel project: **Settings → Domains → Add**, enter the domain PSF owns
(e.g. `philippinestagers.org`), then add the DNS records Vercel shows you
(usually an `A` record for the root domain and a `CNAME` for `www`) at
whichever registrar the domain was bought through. Propagation is usually
minutes to a few hours.

## What's placeholder and needs replacing
- "Ang Bangkay" show entry in `src/data/shows.ts` has a real poster but
  placeholder dates/description/status — fill those in
- Gallery photos/videos — `src/data/media.ts` is currently empty
- About page copy
- Contact email/socials
