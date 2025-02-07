import type { Config } from 'tailwindcss';

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      width: {
        content: 'max-content',
      },
      maxWidth: {
        content: 'max-content',
      },
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        wdcc: {
          blue: '#087df1',
          white: '#ffffff',
        },
        sesa: {
          navy: '#00112b',
          teal: {
            dark: '#49bfaa',
            light: '#70c7b0',
          },
        },
        navy: 'rgb(0, 17, 82)',
      },
      backgroundImage: {
        'wdcc-blue-to-sesa-teal': 'linear-gradient(to right, #087df1, #49bfaa)',
      },
    },
  },
  plugins: [require('daisyui')],
} satisfies Config;
