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
        /* Dark Theme - Mythia */
        'dark-bg': '#0A0A0A',
        'dark-bg-secondary': '#131110',
        'dark-bg-tertiary': '#1A1A1A',

        /* Gold Scale - Mythia */
        'gold-lightest': '#F5F0E8',
        'gold-light': '#F1E0B5',
        'gold-medium': '#C4B49A',
        'gold-muted': '#C4B896',
        'gold-dark': '#8B6914',

        /* Light Theme - Althia Home */
        'light-bg': '#FDFCFA',
        'light-bg-white': '#FFFFFF',
        'light-text': '#111111',
        'light-text-secondary': '#444444',
        'light-text-muted': '#666666',
        'light-text-light': '#999999',
        'light-border': '#E5E5E5',

        /* Per-Mythology Colors */
        'greek-primary': '#D6C6A5',
        'norse-primary': '#8FAFC1',
        'egyptian-primary': '#E4C997',
        'slavic-primary': '#C7A07A',
        'japanese-primary': '#E9E6DF',
        'celtic-primary': '#A8B5A0',

        /* Legacy compatibility */
        'althia-dark': '#0B0908',
        'althia-gold': '#F1E0B5',
        'althia-gold-rich': '#8B6914',
        'althia-white': '#F5F0E8',
        'studio-bg': '#FFFFFF',
        'studio-text': '#111111',
        'studio-muted': '#666666',
        'studio-border': '#E5E5E5',
      },
      fontFamily: {
        playfair: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['-apple-system', 'BlinkMacSystemFont', '"Inter"', 'sans-serif'],
      },
      spacing: {
        'safe-horizontal': 'clamp(16px, 5vw, 24px)',
        'safe-vertical': 'clamp(64px, 8vw, 96px)',
      },
      animation: {
        float: 'float 3s ease-in-out infinite',
        'fade-in': 'fadeIn 0.8s ease forwards',
        'pulse-scroll': 'pulse-scroll 2s infinite',
        'scroll-dot': 'scroll-dot 2s infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateX(-50%) translateY(0)', opacity: '0.7' },
          '50%': { transform: 'translateX(-50%) translateY(8px)', opacity: '1' },
        },
        fadeIn: {
          'from': { opacity: '0', transform: 'translateY(20px)' },
          'to': { opacity: '1', transform: 'translateY(0)' },
        },
        'pulse-scroll': {
          '0%, 100%': { opacity: '0.5' },
          '50%': { opacity: '1' },
        },
        'scroll-dot': {
          '0%': { opacity: '1', transform: 'translateX(-50%) translateY(0)' },
          '100%': { opacity: '0', transform: 'translateX(-50%) translateY(12px)' },
        },
      },
    },
  },
  plugins: [],
}

export default config
