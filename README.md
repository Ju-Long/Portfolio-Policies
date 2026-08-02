# Portfolio Policies

This repository hosts the legal policies (such as the Privacy Policy and Terms of Use) for the apps in the BaBaSaMa portfolio.

## Architecture

This project is built using [Astro](https://astro.build/) and is specifically designed to efficiently serve multi-language App Store localizations.

- **Content Collections:** All policies are stored as Markdown files in `src/content/policies/` and organized by locale (e.g. `en`, `zh-Hant`, `ja`).
- **Dynamic Routing:** A single dynamic route (`src/pages/[locale]/[app]/[policy].astro`) generates every app, language, and policy page at build time.
- **Unified Layout:** `src/layouts/PolicyLayout.astro` wraps the Markdown content in a responsive, premium design using modern vanilla CSS.

## Adding a New Translation

1. Copy the approved English files for one app from `src/content/policies/en/` into the target locale folder (e.g. `ko`).
2. Translate the Markdown content while preserving the `{app}-{privacy|terms}.md` filename pattern.
3. Set `contentLanguage` and `lastUpdatedLabel` in the translated frontmatter.
4. Ensure the target locale is registered in the `locales` array inside `astro.config.mjs`.
5. Run `npm run build` to generate the new static routes.

## Reviewing Drafts

Set `draft: true` while a policy is under review. Draft policies are available
through `npm run dev`, but production builds omit them. After legal and product
review, resolve every review marker and set `draft: false` before translating
or publishing.

## Development

All commands are run from the root of the project:

| Command | Action |
| :--- | :--- |
| `npm run dev` | Starts local dev server at `localhost:4321` |
| `npm run build` | Build your production site to `./dist/` |
| `npm run preview` | Preview your build locally |
