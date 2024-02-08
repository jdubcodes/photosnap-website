/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      md: '768px', // tablet design
      lg: '1440px', // desktop design
    },
    extend: {
      height: {
        'hero-img': '18.375rem',
        'card-img': '17rem',
        'story-img': '23.438rem',
      },
      padding: {
        19: '4.5rem',
      },
      backgroundImage: {
        '18-days-voyage': 'url("src/assets/stories/mobile/18-days-voyage.jpg")',
      },
      colors: {
        grey: '#DFDFDF',
      },
      fontSize: {
        link: [
          '0.75rem',
          {
            letterSpacing: '0.125rem',
          },
        ],
        heading: [
          '2rem',
          {
            letterSpacing: '0.208rem',
            lineHeight: '2.5rem',
            fontWeight: 700,
          },
        ],
        body: [
          '0.938rem',
          {
            lineHeight: '1.563rem',
          },
        ],
        'card-heading': [
          '1.125rem',
          {
            lineHeight: '1.563rem',
          },
        ],
        author: '0.813rem',
      },
    },
  },
  plugins: [],
}
