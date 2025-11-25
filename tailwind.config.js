/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        fadeInLeft: {
          '0%': {
            opacity: '0',
            transform: 'translate3d(-100%, 0, 0)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateZ(0)',
          },
        },
        fadeInRight: {
          '0%': {
            transform: 'translateZ(0)',
            opacity: '1',
          },
          '100%': {
            transform: 'translate3d(100%, 0, 0)',
            opacity: '0',
          },
        },
      },
      animation: {
        fadeInLeft: 'fadeInLeft 1s',
        fadeInRight: 'fadeInRight 1s',
      },
    },
  },
  plugins: [],
}

