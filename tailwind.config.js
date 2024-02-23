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
        'hero-mobile': '18.375rem',
        'hero-tablet': '40.625rem',
        'card-img-mobile': '17rem',
        'card-img-tablet': '37.5rem',
        'story-img': '23.438rem',
      },
      padding: {
        19: '4.5rem',
      },
      gridTemplateColumns: {
        'home-tablet': '1.91fr 1.09fr',
        'home-tablet-reverse': '1.09fr 1.91fr',
        'home-desktop': '1.25fr 1.75fr',
        'home-desktop-reverse': '1.75fr 1.25fr',
      },
      gridTemplateRows: {
        'footer-tablet': '1rem 1fr 1.25rem',
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
        'heading-mobile': [
          '2rem',
          {
            letterSpacing: '0.208rem',
            lineHeight: '2.5rem',
            fontWeight: 700,
          },
        ],
        'heading-tablet': [
          '2.5rem',
          {
            letterSpacing: '0.261rem',
            lineHeight: '3rem',
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
