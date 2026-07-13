import { z, defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';

const projectsCollection = defineCollection({
  loader: glob({ pattern: "**/*.mdoc", base: "./src/content/projects" }),
  schema: ({ image }) => z.object({
    title: z.string(),
    startDate: z.coerce.date().optional(),
    endDate: z.coerce.date().optional(),
    description: z.string().optional(),
    image: image().optional(),
    gallery: z.array(image()).optional(),
    tags: z.array(z.string()),
  }),
});

const aboutCollection = defineCollection({
  loader: glob({ pattern: "**/*.mdoc", base: "./src/content/about" }),
  schema: ({ image }) => z.object({
    headline: z.string(),
    image: image().optional(),
  }),
});

const tagsCollection = defineCollection({
  loader: glob({ pattern: "**/*.json", base: "./src/content/tags" }),
  schema: z.object({
    name: z.string(),
  }),
});

export const collections = {
  'projects': projectsCollection,
  'about': aboutCollection,
  'tags': tagsCollection,
};
