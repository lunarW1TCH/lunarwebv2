// @ts-check
import { defineConfig } from 'astro/config';
import tsconfigPaths from 'vite-tsconfig-paths';

import svelte from '@astrojs/svelte';

import tailwind from '@astrojs/tailwind';

import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  integrations: [svelte(), tailwind(), mdx()],
  vite: {
    plugins: [tsconfigPaths()],
  },
});
