/** @type {import('tailwindcss').Config} */
import flowbitePlugin from 'flowbite/plugin'
export default {
  content: ['./src/**/*.{html,js,svelte,ts}', './node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}'],
  darkMode: 'selector',
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#FFF5F2',
          100: '#FFF1EE',
          200: '#FFE4DE',
          300: '#FFD5CC',
          400: '#FFBCAD',
          500: '#FE795D',
          600: '#EF562F',
          700: '#EB4F27',
          800: '#CC4522',
          900: '#4880FF'
        },
        clr: '#4880FF',
        secondary: '#FF7B7B',
        bgLightClr : '#FFFFFF',
        templateClr : '#f5f6fa'
      },
      boxShadow: {
        inwards: 'inset -3.75px -3.75px 7.5px rgba(255, 255, 255, 0.4), inset 3.75px 3.75px 7.5px rgba(0, 0, 0, 0.16)',
        small: '0px 4px 6px rgba(0, 0, 0, 0.08)',
        lightNormal: ' -3px -3px 6px rgba(255, 255, 255, 0.7), 3px 3px 6px rgba(0, 0, 0, 0.16)',
        darkNormal: '-3px -3px 6px rgba(255, 255, 255, 0.1), 3px 3px 6px rgba(0, 0, 0, 0.96)'
      }
    }
  },
  plugins: [flowbitePlugin]
};