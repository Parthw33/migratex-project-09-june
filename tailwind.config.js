/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#053947',
        secondary: '#0a83a0',
        accent: '#0a83a0',
        heading: '#053947',
        link: '#0a83a0',
        border: '#e5e7eb',
        textMain: '#343333',
      },
      fontFamily: {
        heading: ['usual', 'Georgia', 'serif'],
        body: ['Noto Sans', 'sans-serif'],
      },
      fontSize: {
        'h1': ['40px', { lineHeight: '55px', fontWeight: '600' }],
        'h2': ['26.4px', { lineHeight: '36.3px', fontWeight: '600' }],
        'h3': ['24px', { lineHeight: '33px', fontWeight: '600' }],
      },
      borderRadius: {
        pill: '32px',
      },
    },
  },
  plugins: [],
};