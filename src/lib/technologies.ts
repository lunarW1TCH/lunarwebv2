import { z } from 'astro:schema';

export const LinkableTechnologies = z.enum([
  'typescript',
  'prisma',
  'mongo',
  'bun',
  'panda',
  'shadcn',
  'vercel',
  'react',
  'react-email',
  'next',
  'stripe',
  'oauth',
  'node',
  'elixir',
  'javascript',
  'python',
  'rust',
  'vba',
  'astro',
  'flask',
  'hono',
  'elysia',
  'svelte',
  'vue',
  'docker',
  'ue5',
  'arduino',
  'rpi',
  'tailwind',
  'scss',
  'react-native',
  'socket-io',
  'tauri',
  'emotion',
  'phoenix',
  'rocket',
  'express',
  'vitepress',
]);

export const NonLinkableTechnologies = z.enum([
  'sso',
  'sql',
  'no-sql',
  'oop',
  'fp',
  'linux',
  'state-management',
]);

export type LinkableTechnologies = z.infer<typeof LinkableTechnologies>;

export type NonLinkableTechnologies = z.infer<typeof NonLinkableTechnologies>;

export const TECH_LINKS = {
  typescript: 'https://www.typescriptlang.org/',
  prisma: 'https://www.prisma.io/',
  mongo: 'https://www.mongodb.com/',
  oauth: 'https://authjs.dev/',
  node: 'https://nodejs.org/',
  bun: 'https://bun.sh/',
  panda: 'https://panda-css.com/',
  shadcn: 'https://ui.shadcn.com/',
  vercel: 'https://vercel.com/',
  stripe: 'https://stripe.com/',
  react: 'https://react.dev/',
  next: 'https://nextjs.org/',
  'react-email': 'https://react.email/',
  arduino: 'https://www.arduino.cc/',
  astro: 'https://astro.build/',
  docker: 'https://www.docker.com/',
  elixir: 'https://elixir-lang.org/',
  elysia: 'https://elysiajs.com/',
  flask: 'https://flask.palletsprojects.com/en/3.0.x/patterns/',
  hono: 'https://hono.dev/',
  javascript: 'https://developer.mozilla.org/en-US/docs/Web/javascript',
  python: 'https://www.python.org/',
  rpi: 'https://www.raspberrypi.com/',
  rust: 'https://www.rust-lang.org/',
  svelte: 'https://svelte.dev/',
  tailwind: 'https://tailwindcss.com/',
  ue5: 'https://www.unrealengine.com/en-US/unreal-engine-5',
  vba: 'https://learn.microsoft.com/en-us/office/vba/library-reference/concepts/getting-started-with-vba-in-office',
  vue: 'https://vuejs.org/',
  'react-native': 'https://reactnative.dev/',
  'socket-io': 'https://socket.io/',
  emotion: 'https://emotion.sh/',
  express: 'https://expressjs.com/',
  phoenix: 'https://www.phoenixframework.org/',
  rocket: 'https://rocket.rs/',
  scss: 'https://sass-lang.com/',
  tauri: 'https://tauri.app/',
  vitepress: 'https://vitepress.dev/',
} as const satisfies Record<LinkableTechnologies, string>;

export const TECH_NAMES = {
  typescript: 'TypeScript',
  prisma: 'Prisma',
  mongo: 'MongoDB',
  oauth: 'OAuth',
  node: 'NodeJS',
  bun: 'Bun',
  panda: 'Panda CSS',
  shadcn: 'shadcn/ui',
  vercel: 'Vercel',
  stripe: 'Stripe',
  react: 'React',
  next: 'NextJS',
  'react-email': 'React Email',
  sso: 'SSO',
  sql: 'SQL',
  'no-sql': 'NoSQL',
  arduino: 'Arduino',
  astro: 'Astro',
  docker: 'Docker',
  elixir: 'Elixir',
  elysia: 'Elysia',
  flask: 'Flask',
  hono: 'Hono',
  javascript: 'JavaScript',
  python: 'Python',
  rpi: 'RaspberryPi',
  rust: 'Rust',
  svelte: 'Svelte',
  tailwind: 'Tailwind',
  ue5: 'Unreal Engine 5',
  vba: 'VBA',
  vue: 'Vue',
  fp: 'Functional Programming',
  linux: 'Linux',
  oop: 'Object Oriented Programming',
  'react-native': 'React Native',
  'socket-io': 'Socket.IO',
  emotion: 'Emotion CSS',
  express: 'Express',
  phoenix: 'Phoenix',
  rocket: 'Rocket',
  scss: 'SCSS',
  tauri: 'Tauri',
  'state-management':
    'State management [zustand, nanostores, svelte/store, ...]',
  vitepress: 'VitePress',
} as const satisfies Record<
  LinkableTechnologies | NonLinkableTechnologies,
  string
>;
