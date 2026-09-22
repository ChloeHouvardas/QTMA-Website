# QTMA website refresh

This branch is the shared foundation for the 2026 rebuild of the Queen's
Technology & Media Association website. It uses Next.js App Router, React,
TypeScript, Tailwind CSS, and Sass.

The existing images, PDFs, and content data are retained for reference. New
application code belongs in `src` and must be written in TypeScript.

## Running locally

Install dependencies and start the development server:

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

Before opening a pull request, run:

```bash
pnpm lint
pnpm build
```

Use `pnpm format` to format the project.

## Branch workflow

Create feature branches from `refresh-2026` and target pull requests back to
`refresh-2026`. The branch will be merged into `main` when the rebuilt website
is ready to replace the current production site.
