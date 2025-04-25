/** @type {import('tailwindcss').Config} */
export default {
    content: [
      './index.html',
      './src/**/*.{ts,tsx}',
    ],
    theme: {
      extend: {
        colors: {
          primary: '#5B21B6',
          accent:  '#F59E0B',
        },
        animation: {
          'fade-in': 'fadeIn 0.5s ease-out forwards',
        },
        keyframes: {
          fadeIn: {
            '0%':   { opacity: 0, transform: 'translateY(10px)' },
            '100%': { opacity: 1, transform: 'translateY(0)' },
          },
        },
      },
    },
    plugins: [],
  };
  