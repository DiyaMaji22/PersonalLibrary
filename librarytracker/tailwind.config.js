/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,html}",
    "./**/*.html"
  ],
  theme: {
    extend: {
      colors: {
        'vintage': {
          dark: '#1a1a1a',
          light: '#d9c7a6',
          border: '#3a2c2c',
          paper: '#efebe9',
        },
        'mystery': {
          dark: '#0d0d0d',
        },
        'christie': {
          blue: '#2c3e50',
        },
        'bond': {
          green: '#2e7d32',
        },
        'rowling': {
          purple: '#5d4037',
        }
      },
      fontFamily: {
        'cinzel': ['Cinzel', 'serif'],
        'crimson': ['Crimson Text', 'serif'],
        'playfair': ['Playfair Display', 'serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-in',
        'spin-slow': 'spin 20s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      }
    },
  },
  plugins: [],
}
