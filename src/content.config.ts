import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const policiesCollection = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/policies" }),
  schema: z.object({
    title: z.string(),
    app: z.string(),
    lastUpdated: z.string()
  }),
});

export const collections = {
  policies: policiesCollection,
};
