/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'light-gray' : '#f7f2e9',
        'dark-gray'  : '#797979'
      },
      backgroundImage:{
        'main-cats' : "url('page-images/main_cats.jpg')"
      }
    },
  },
  plugins: [],
}

