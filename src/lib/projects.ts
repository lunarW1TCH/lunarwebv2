import { z } from 'astro:schema';

export const Projects = z.enum([
  'lunarweb',
  'rest-api-performance',
  'simple-2d-vectors',
  'taurim',
  'exchange-rates',
  'minos',
  'lunarify',
  'lunar-stars',
  'lunar-roller',
  'thesis',
]);

export const PROJECT_NAMES = {
  'exchange-rates': 'exchange_rates',
  'lunar-roller': 'lunar roller',
  'lunar-stars': 'lunar stars',
  'rest-api-performance': 'rest-api-performance',
  'simple-2d-vectors': 'simple-2d-vectors',
  lunarify: 'lunarify',
  lunarweb: 'lunarweb',
  minos: 'Minos',
  taurim: 'Taurim',
  thesis: "Bachelor's thesis",
} as const satisfies Record<Projects, string>;

export const PROJECT_LINKS = {
  'exchange-rates': '/projects/exchange-rates',
  'lunar-roller': '/projects/lunar-roller',
  'lunar-stars': '/projects/lunar-stars',
  'rest-api-performance': '/projects/rest-api-performance',
  'simple-2d-vectors': '/projects/simple-2d-vectors',
  lunarify: '/projects/lunarify',
  lunarweb: '/projects/lunarweb',
  minos: '/projects/minos',
  taurim: '/projects/taurim',
  thesis: '/#exp1',
} as const satisfies Record<Projects, string>;

export type Projects = z.infer<typeof Projects>;

export const Icons = z.enum([
  'Moon',
  'Gauge',
  'Compass',
  'Component',
  'Bitcoin',
  'Dices',
  'Telescope',
  'CircuitBoard',
  'AudioLines',
]);

export type Icons = z.infer<typeof Icons>;
