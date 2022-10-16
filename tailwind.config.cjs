module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      textColor: {
        theme: {
          primary: 'var(--primary-text-color)',
          secondary: 'var(--secondary-text-color)',
          navigation: 'var(--navigation-text-color)',
        },
      },
      backgroundColor: {
        theme: {
          layout: 'var(--layout-color)',
          primary: 'var(--primary-bg-color)',
          sidebar: 'var(--sidebar-bg-color)',
          alpha: 'var(--alpha-bg-color)',
          active: 'var(--active-bg-color)',
          activeBorder: 'var(--active-border-color)',
        },
      },
      colors: {
        theme: {
          primary: 'var(--primary-text-color)',
          secondary: 'var(--secondary-text-color)',
          active: 'var(--active-border-color)',
          separate: 'var(--active-bg-color)',
        },
      },
      backgroundImage: {
        'advert-linear-gradient': 'linear-gradient(117deg,#5a4be7,#c86dd7 102%)',
      },
    },
  },
  plugins: [require('tailwind-scrollbar')],
}
