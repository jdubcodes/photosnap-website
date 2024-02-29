/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      md: '768px', // tablet design
      lg: '1440px', // desktop design
    },
    extend: {
      maxWidth: {
        'contain-t': '52rem',
        'contain-d': '70rem',
      },
      height: {
        'vp-mobile': 'calc(100vh - 72px)',
        'hero-mobile': '18.375rem',
        'hero-tablet': '40.625rem',
        'card-img-mobile': '17rem',
        'card-img-tablet': '37.5rem',
        'story-img': '23.438rem',
        'price-card': '29.375rem',
      },
      minHeight: {
        'vp-mobile': 'calc(100vh - 72px)',
      },
      padding: {
        19: '4.5rem',
      },
      gridTemplateColumns: {
        'home-tablet': '1.91fr 1.09fr',
        'home-tablet-reverse': '1.09fr 1.91fr',
        'home-desktop': '1.25fr 1.75fr',
        'home-desktop-reverse': '1.75fr 1.25fr',
        'footer-desktop': '170px 1fr 300px',
      },
      gridTemplateRows: {
        'footer-tablet': '1rem 1fr 1.25rem',
        'footer-desktop': '1fr 1fr',
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
        'price-title': [
          '1.5rem',
          {
            lineHeight: '1.563rem',
            fontWeight: 700,
          },
        ],
        'price-time': [
          '0.938rem',
          {
            lineHeight: '1.563rem',
          },
        ],
        'price-btn': [
          '0.75rem',
          {
            letterSpacing: '3px',
            fontWeight: 700,
          },
        ],
        'package-name': [
          '0.625rem',
          {
            letterSpacing: '0.104rem',
            fontWeight: 700,
          },
        ],
      },
      backgroundImage: {
        'stories-tablet':
          'linear-gradient(rgba(0,0,0,0.15), rgba(0,0,0,0.15)), url("src/assets/stories/moon-of-appalacia.jpg")',
        cta: 'linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url("src/assets/shared/bg-beta.jpg")',
      },
    },
  },
  plugins: [],
}
