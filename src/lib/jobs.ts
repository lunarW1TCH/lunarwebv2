import { z } from 'astro:schema';

export const Jobs = z.enum(['4cf', 'anv', 'nyx', 'uv']);

export const JOB_NAMES = {
  '4cf': '',
  anv: '',
  nyx: '',
  uv: '',
} as const satisfies Record<Jobs, string>;

export const JOB_LINKS = {
  '4cf': '',
  anv: '',
  nyx: '',
  uv: '',
} as const satisfies Record<Jobs, string>;

export type Jobs = z.infer<typeof Jobs>;
