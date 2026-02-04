import { defineCollection, z } from 'astro:content';

const thoughtsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    content: z.string().optional(),
    tags: z.array(z.string()).optional(),
  }),
});

export const collections = {
  thoughts: thoughtsCollection,
};
