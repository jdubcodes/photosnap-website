/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      md: '768px', // tablet design
    },
    extend: {
      fontSize: {
        navLinks: [
          '0.75rem',
          {
            letterSpacing: '0.125rem',
          },
        ],
      },
    },
  },
  plugins: [],
}
