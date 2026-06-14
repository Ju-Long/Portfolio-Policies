// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://policies.babasama.com',
  i18n: {
    defaultLocale: "en",
    locales: ["en", "zh-Hant", "nl-NL", "en-AU", "en-CA", "en-US", "fr-FR", "de-DE", "it", "ja", "ko", "pt-BR", "pt-PT", "ru", "zh-Hans", "es-MX", "es-ES", "sv", "en-GB"],
    routing: {
      prefixDefaultLocale: true
    }
  }
});
