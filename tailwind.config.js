/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        satoshi: ['Satoshi', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        'primary-orange': '#FF5722',
        'custom-yellow': '#F3E5AB',
        rainbow: {
          'violet': '#9400D3',
          'indigo': '#4B0082',
          'blue': '#0000FF',
          'green': '#00FF00',
          'yellow': '#FFFF00',
          'orange': '#FF7F00',
          'red': '#FF0000',
        }
      }
    },
  },
  plugins: [],
}