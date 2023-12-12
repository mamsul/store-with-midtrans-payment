import type { Config } from 'tailwindcss';
const plugin = require('tailwindcss/plugin');

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {},
  plugins: [
    plugin(function ({
      addUtilities,
    }: {
      addUtilities: (utilities: object) => void;
    }) {
      const utilities = {
        '.main-bg': {
          background: 'url(/liquid-cheese.png) no-repeat',
          'background-size': 'cover',
          'background-position': 'center',
        },
      };

      addUtilities(utilities);
    }),
  ],
};
export default config;
