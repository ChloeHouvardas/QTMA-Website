# Repository Guidelines

## Project Structure & Module Organization

This repository is the 2026 QTMA website refresh, built with Next.js 14, React,
TypeScript, Tailwind CSS, and Sass. Put new application code in `src/`:
`src/app/` contains App Router pages and global styles, `src/components/` holds
reusable UI grouped by feature, and `src/data/` stores typed content. Static
images, PDFs, icons, and `sitemap.xml` live in `public/`; reference datasets and
archived content remain in `archive/`. Treat root-level `pages/`, `components/`, and
`styles/` as legacy unless a task explicitly targets them.

## Build, Test, and Development Commands

Use pnpm 9 (the `preinstall` script rejects other package managers).

- `pnpm install` installs locked dependencies from `pnpm-lock.yaml`.
- `pnpm dev` starts the local site at `http://localhost:3000`.
- `pnpm lint` runs the Next.js Core Web Vitals ESLint rules.
- `pnpm build` creates a production build and performs framework/type checks.
- `pnpm start` serves the completed production build.
- `pnpm format` formats the repository with Prettier.

## Coding Style & Naming Conventions

- Write new code in strict TypeScript. Use tabs, double quotes, semicolons, and an
  80-column target as configured in `.prettierrc`; do not hand-format around the
  formatter. Prefer the `@/` alias for imports from `src/`. Name React components
  and their files in PascalCase (`ContactForm.tsx`), variables and functions in
  camelCase, and route directories in lowercase. Keep Tailwind utilities in JSX
  and shared global rules in `src/app/globals.scss`. Add `"use client"` only to
  components that require browser APIs, state, or effects.

- For all images, instead of use a placeholder image just put an alt text of the section name.
- When writing tailwind code, always use build in tailwind classes instead of writing custom css. If you need to write custom css, please use the `src/app/globals.scss` file. (eg. never write 'className="text-[20px]"', instead use 'className="text-lg"')

## Testing Guidelines

No automated test framework or coverage threshold is currently configured.
For every change, run `pnpm lint` and `pnpm build`, then inspect affected pages
with `pnpm dev` at mobile and desktop widths. Verify navigation, keyboard focus,
image loading, and form behavior where relevant. If tests are introduced, keep
them beside the feature as `*.test.ts` or `*.test.tsx` and add the runner to
`package.json`.

## Commit & Pull Request Guidelines

Recent history uses short Conventional Commit-style subjects such as
`feat: implement products page`, `fix: ...`, `refact: ...`, and `chore: ...`.
Keep commits focused and use an imperative summary. Branch from `refresh-2026`
and target pull requests back to it. PRs should explain the change, list manual
and automated checks, link related issues, and include before/after screenshots
for visible UI changes. Do not commit generated `.next/` output or secrets.
