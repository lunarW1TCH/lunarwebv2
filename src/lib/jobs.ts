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
  uv: '/#exp4',
  nyx: '/#exp5',
} as const satisfies Record<Jobs, `/${z.infer<typeof HomeHash>}`>;

export type Jobs = z.infer<typeof Jobs>;

export const HomeHash = z.enum(['#exp1', '#exp2', '#exp3', '#exp4', '#exp5']);
