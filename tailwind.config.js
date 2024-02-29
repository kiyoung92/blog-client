import { nextui } from '@nextui-org/react';

const config = {
  content: ['./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  darkMode: 'class',
  plugin: [nextui()],
};

export default config;
