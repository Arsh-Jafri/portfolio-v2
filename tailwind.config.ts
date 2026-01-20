import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        accent: '#1E6EF4',
        background: '#0B0C10',
        'background-card': '#161B22',
        text: '#F0F6FC',
        'text-meta': '#8B949E',
        border: '#30363D',
      },
      fontFamily: {
        sans: ['var(--font-onest)', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
        serif: ['var(--font-instrument-serif)', 'Georgia', 'serif'],
      },
      fontWeight: {
        light: '300', // Only Onest Light
        normal: '400', // Only for Instrument Serif Regular Italic
      },
      keyframes: {
        aurora: {
          from: {
            backgroundPosition: '50% 50%, 50% 50%',
          },
          to: {
            backgroundPosition: '350% 50%, 350% 50%',
          },
        },
      },
      animation: {
        aurora: 'aurora 60s linear infinite',
      },
    },
  },
  plugins: [],
}
export default config

