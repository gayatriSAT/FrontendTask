/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
    theme: {
    extend: {
      colors: {
        'dark-gray': '#DCDCDC',
      },
      fontFamily : {
        Montserrat : ['Montserrat','sans-serif'],
        NunitoSans : ['NunitoSans','sans-serif'],
      },
    },
  },
  plugins: [],
}

