/*
- toml loader
- schema for project and skill
*/
// import { parse } from 'toml';
// import { glob, file } from 'astro/loaders';

// import { glob } from 'astro/loaders';
import { Jobs } from '@/lib/jobs';
import { Projects } from '@/lib/projects';
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
    projects: Projects.array().optional(),
    type: z.enum(['lang', 'framework', 'lib', 'other']),
    jobs: Jobs.array().optional(),
  }),
  loader: glob({ pattern: '**/*.yaml', base: './src/content/skills' }),
});

export const collections = { skill };
