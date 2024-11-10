/*
- toml loader
- schema for project and skill
*/
// import { parse } from 'toml';
// import { glob, file } from 'astro/loaders';

// import { glob } from 'astro/loaders';
import {
  LinkableTechnologies,
  NonLinkableTechnologies,
} from '@/lib/technologies';
import { glob } from 'astro/loaders';
import { defineCollection, z } from 'astro:content';

// const projects = defineCollection({
//   schema: z.object({}),
//   loader: glob({ pattern: /todo/, base: './src/content/projects' }),
// });
const skill = defineCollection({
  schema: z.object({
    id: z.union([LinkableTechnologies, NonLinkableTechnologies]),
    description: z.string().optional(),
    projects: z
      .object({
        name: z.string(),
        link: z.string(),
      })
      .array()
      .optional(),
    type: z.enum(['lang', 'framework', 'lib', 'other']),
    jobs: z
      .object({
        name: z.string(),
        link: z.string(),
      })
      .array()
      .optional(),
  }),
  loader: glob({ pattern: '**/*.yaml', base: './src/content/skills' }),
});

// load toml using Astro.glob and transform it with toml parser there

export const collections = { skill };
