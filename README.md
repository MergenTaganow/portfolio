# Mergen Taganov Portfolio

Personal portfolio project for Mergen Taganov, focused on Flutter, cross-platform mobile products, case studies, achievements, and professional contact information.

## Stack

- React
- Vite
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide Icons

## Local development

1. Install dependencies:

```bash
npm install
```

2. Start the dev server:

```bash
npm run dev
```

3. Build for production:

```bash
npm run build
```

## Content structure

- Portfolio data: `src/data/portfolio.ts`
- Main page: `src/pages/Index.tsx`
- Product dialogs: `src/components/ProjectsSection.tsx`
- Achievements and certificate links: `src/components/AchievementsSection.tsx`
- Contact section: `src/components/ContactSection.tsx`

## Assets

- Profile image: `public/profile/mergen-taganov.jpg`
- Resume PDF: `public/resume.pdf`
- Certificate scans: `public/certificates/`

## Notes

- Product case studies are rendered from structured data in `src/data/portfolio.ts`.
- Certificate files should use the exact names listed in `public/certificates/README.md`.
- The contact form currently uses the visitor's email app via `mailto:` and does not send mail directly from a backend service.
