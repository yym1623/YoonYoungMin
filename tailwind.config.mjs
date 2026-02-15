/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['var(--font-montserrat)', 'sans-serif'],
      },
      keyframes: {
        fadeInLeft: {
          '0%': { opacity: '0', transform: 'translate3d(-100%, 0, 0)' },
          '100%': { opacity: '1', transform: 'translateZ(0)' },
        },
        fadeInRight: {
          '0%': { transform: 'translateZ(0)', opacity: '1' },
          '100%': { transform: 'translate3d(100%, 0, 0)', opacity: '0' },
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

export default config
