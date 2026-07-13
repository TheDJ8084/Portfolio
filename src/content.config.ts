import { z, defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';

const projectsCollection = defineCollection({
  loader: glob({ pattern: "**/*.mdoc", base: "./src/content/projects" }),
  schema: ({ image }) => z.object({
    title: z.string(),
    startDate: z.string().optional(),
    endDate: z.string().optional(),
    description: z.string(),
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

export const collections = {
  'projects': projectsCollection,
  'about': aboutCollection,
};
