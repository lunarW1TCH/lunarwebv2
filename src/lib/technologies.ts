export const LINKS = {
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
} as const satisfies Record<LinkableTechnologies, string>;

export const NAMES = {
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
} as const satisfies Record<
  LinkableTechnologies | NonLinkableTechnologies,
  string
>;

export type LinkableTechnologies =
  | 'typescript'
  | 'prisma'
  | 'mongo'
  | 'bun'
  | 'panda'
  | 'shadcn'
  | 'vercel'
  | 'react'
  | 'react-email'
  | 'next'
  | 'stripe'
  | 'oauth'
  | 'node';

export type NonLinkableTechnologies = 'sso' | 'sql' | 'no-sql';
