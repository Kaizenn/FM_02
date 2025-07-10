/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      colors: {
        surface: {
          0: 'var(--color-surface-0)',
          1: 'var(--color-surface-1)',
        },
        primary: {
          500: 'var(--color-primary-500)',
          950: 'var(--color-primary-950)',
        },
      },
      fontFamily: {
        figtree: ['Figtree', 'sans-serif'],
      },
      maxWidth: {
        32: '2rem',
        327: '20.4375rem',
      },
      borderRadius: {
        10: '0.625rem',
        20: '1.25rem',
      },
      boxShadow: {
        flat: '8px 8px 0 var(--shadow-color)',
      },
    },
  },
  plugins: [],
}
