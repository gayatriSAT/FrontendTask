/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
    theme: {
    extend: {
      colors: {
        'dark-gray': '#DCDCDC',
        'feature-gray' : '#5C5C5C',
        'dark-pink' : '#AD2F89',
      },
      fontFamily : {
        Montserrat : ['Montserrat','sans-serif'],
        NunitoSans : ['NunitoSans','sans-serif'],
      },
    },
  },
  plugins: [],
}

