import { z } from 'astro:schema';

export const Jobs = z.enum(['4cf', 'anv', 'nyx', 'uv']);

export const JOB_NAMES = {
  '4cf': '4CF',
  anv: 'ANV Production',
  nyx: 'NYX VX',
  // cSpell:ignore UuedViljapuuaiad
  uv: 'UuedViljapuuaiad OÜ',
} as const satisfies Record<Jobs, string>;

export const JOB_LINKS = {
  '4cf': '/#exp2',
  anv: '/#exp3',
  nyx: '/#exp4',
  uv: 'https://www.linkedin.com/company/uv-ou/',
} as const satisfies Record<Jobs, string>;

export type Jobs = z.infer<typeof Jobs>;
