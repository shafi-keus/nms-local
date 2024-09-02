/** @type {import('tailwindcss').Config} */
import flowbitePlugin from 'flowbite/plugin'
export default {
  content: ['./src/**/*.{html,js,svelte,ts}', './node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}'],
  darkMode: 'selector',
  theme: {
    extend: {
      colors: {
        primary: {
          50:  '#E7F0FF',
          100: '#CFE1FF',
          200: '#B0CDFF',
          300: '#8CB8FF',
          400: '#6AA3FF',
          500: '#488EFF',
          600: '#3477E6',
          700: '#2A60CC',
          800: '#204BB3',
          900: '#4880FF'
        }, 
        secondary : {
          50 : '#FF7B7B',
          100 : '#f55d5d'
        },
        templateClr : '#f5f6fa',
        templateDarkClr : '#1f2937',

        // text-colors
        light : '#4b5563',
        dark : '#fff'

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