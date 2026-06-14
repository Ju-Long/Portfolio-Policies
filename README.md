# Portfolio Policies

This repository hosts the legal policies (such as the Privacy Policy and Terms of Use) for the apps in the BaBaSaMa portfolio.

## Architecture

This project is built using [Astro](https://astro.build/) and is specifically designed to efficiently serve multi-language App Store localizations.

- **Content Collections:** All policies are stored as Markdown files in `src/content/policies/` and organized by locale (e.g. `en`, `zh-Hant`, `ja`).
- **Dynamic Routing:** A single dynamic route (`src/pages/[locale]/travelsg/[policy].astro`) generates the web pages for all supported languages and policies at build time.
- **Unified Layout:** `src/layouts/PolicyLayout.astro` wraps the Markdown content in a responsive, premium design using modern vanilla CSS.

## Adding a New Translation
1. Duplicate the `src/content/policies/en` folder and rename it to your target locale (e.g., `ko` for Korean).
2. Translate the Markdown content inside the newly created files.
3. Ensure the target locale is registered in the `locales` array inside `astro.config.mjs`.
4. Run `npm run build` to generate the new static routes.

## Development

All commands are run from the root of the project:

| Command | Action |
| :--- | :--- |
| `npm run dev` | Starts local dev server at `localhost:4321` |
| `npm run build` | Build your production site to `./dist/` |
| `npm run preview` | Preview your build locally |
