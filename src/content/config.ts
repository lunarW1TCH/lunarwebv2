import { Jobs } from '../lib/jobs';
import { Icons, Projects } from '../lib/projects';
import {
  LinkableTechnologies,
  NonLinkableTechnologies,
} from '../lib/technologies';
import { glob } from 'astro/loaders';
import { defineCollection, z } from 'astro:content';

const skill = defineCollection({
  schema: z.object({
    id: z.union([LinkableTechnologies, NonLinkableTechnologies]),
    projects: Projects.array().optional(),
    type: z.enum(['lang', 'framework', 'lib', 'other']),
    jobs: Jobs.array().optional(),
  }),
  loader: glob({ pattern: '**/*.yaml', base: './src/content/skills' }),
});

const project = defineCollection({
  schema: z.object({
    id: Projects,
    description: z.string(),
    image: z.string().optional(),
    technologies: z
      .union([LinkableTechnologies, NonLinkableTechnologies])
      .array(),
    priority: z.number().int(),
    links: z
      .object({
        type: z.enum(['github', 'website', 'other']),
        link: z.string(),
        name: z.string(),
      })
      .array()
      .optional(),
    createdOn: z.date(),
    updatedOn: z.date().optional(),
    icon: Icons,
  }),
  loader: glob({ pattern: '**/*.mdx', base: './src/content/projects' }),
});

export const collections = { skill, project };
