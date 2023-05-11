/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'updown': 'updown 3s linear infinite',
      },
      keyframes: {
        updown: {
          '0%': {
            transform: 'translateY(-2px)',
          },
          '50%': {
            transform: 'translateY(100px)',
          },
          '100%': {
            transform: 'translateY(-2px)',
          },
        },
      },
    },
  },
  plugins: [],
}