import type { Config } from "tailwindcss";
import daisyui from 'daisyui'

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'northBlack': '#131313',
        'northSecondaryBlack': '#3A3B3D',
        'northGray': '#BCBEC1',
      },
    },
  },
  plugins: [daisyui],
};
export default config;
