/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./*.html"
  ],
  theme: {
    extend: {
      colors: {
        'brand-primary': '#EE6c4d',
        'brand-blue': '#6482AD',
        'brand-blueHover': '#527199',
        'brand-dark': '#293241',
        'bg-topbar': '#f8fafd',
        'dark': '#293241',
        'gray-600': '#6b7280',
      },
      boxShadow: {
        'brand-btn': '0 4px 15px rgba(100, 130, 173, 0.35)',
      },
      fontFamily: {
        inter: ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
}