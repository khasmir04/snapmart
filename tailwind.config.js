/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
    },
    extend: {
      colors: {
        green: {
          DEFAULT: '#80af46',
          50: '#f4f9ec',
          100: '#e7f1d6',
          200: '#d0e3b3',
          300: '#b1d185',
          400: '#94bd5e',
          500: '#80af46',
          600: '#5b8030',
          700: '#466328',
          800: '#3b4f25',
          900: '#334423',
          950: '#19240f',
        },
      },
      fontFamily: {
        outfit: ['var(--font-outfit)', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
