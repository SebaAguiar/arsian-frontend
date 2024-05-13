import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
    './node_modules/flowbite/**/*.js',
    './node_modules/flowbite-react/lib/**/*.js',
    './public/**/*.html',
  ],
  theme: {
    colors: {
      my: {
        black: '#232323',
        green: '#00b89f',
        'side-gray': '#444444',
        gray: '#BBBBBB',
        white: '#FFFFFF',
      },
    },
    extend: {
      textShadow: {
        green: '20px 20px 20px 20px #55B481',
      },
      spacing: {
        '100': '25rem',
        '110': '30rem',
        '120': '35rem',
        '130': '40rem',
        '140': '45rem',
        '150': '50rem',
        '160': '55rem',
        '170': '60rem',
        '180': '65rem',
        '190': '70rem',
        '200': '75rem',
        '210': '80rem',
        '220': '85rem',
        '230': '90rem',
        '240': '95rem',
        '242': '96rem',
      },
    },
  },
  variants: {
    extend: {
      textShadow: ['responsive'],
      scrollbar: ['rounded', 'dark', 'thin', 'hidden'],
    },
  },
  plugins: [
    // require('tailwindcss-textshadow'),
    require('flowbite/plugin'),
    require('tailwind-scrollbar'),
    // require('tailwind-scrollbar-hide'),
    require('daisyui'),
  ],
};
export default config;
