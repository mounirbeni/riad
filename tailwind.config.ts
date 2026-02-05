import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        sand: '#E8DCC8',
        beige: '#F5EFE7',
        warmwhite: '#FBF9F5',
        charcoal: '#1C1B19',
        olive: '#6B6A55'
      },
      boxShadow: {
        soft: '0 20px 60px rgba(17, 16, 14, 0.08)',
        card: '0 12px 40px rgba(17, 16, 14, 0.12)'
      },
      fontFamily: {
        display: ['var(--font-display)', 'serif'],
        body: ['var(--font-body)', 'sans-serif']
      },
      backgroundImage: {
        'hero-texture': 'radial-gradient(circle at top, rgba(251,249,245,0.6), rgba(251,249,245,0.1) 45%, transparent 75%)'
      }
    }
  },
  plugins: []
};

export default config;
