import daisyui from 'daisyui';

import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {},
  },
  plugins: [typography, daisyui],
  daisyui: {
    themes: [
      {
        'dark-pastel': {
          primary: '#ffffff',
          'primary-focus': '#ebe5ff',
          'primary-content': '#111113',

          secondary: '#d1ffea',
          'secondary-focus': '#a8ffe5',
          'secondary-content': '#111113',

          accent: '#d9d6ff',
          'accent-focus': '#c4bdff',
          'accent-content': '#111113',

          neutral: '#1c1d21',
          'neutral-focus': '#16181d',
          'neutral-content': '#ffffff',

          'base-100': '#1a1a1f',
          'base-200': '#151619',
          'base-300': '#111113',
          'base-content': '#ebecf0',

          info: '#7acdf0',
          success: '#4cb8ad',
          warning: '#fdba6d',
          error: '#ee6363',

          '--rounded-box': '4px',
          '--rounded-btn': '2px',
          '--rounded-badge': '1.9rem',

          '--animation-btn': '.1s',
          '--animation-input': '.1s',

          '--btn-text-case': 'uppercase',
          '--navbar-padding': '4px',
          '--border-btn': '1px',
        },
      },
    ],
  },
};
