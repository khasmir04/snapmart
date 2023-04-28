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
        blue: {
          DEFAULT: '#1564AE',
          50: '#D3E7FA',
          100: '#C0DDF7',
          200: '#9CC9F3',
          300: '#78B5EF',
          400: '#53A1EA',
          500: '#2F8DE6',
          600: '#1979D2',
          700: '#1564AE',
          800: '#0F477C',
          900: '#092A4A',
          950: '#061C31',
        },
      },
      fontFamily: {
        outfit: ['var(--font-outfit)', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
