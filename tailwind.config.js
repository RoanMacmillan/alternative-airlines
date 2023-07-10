/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        
        customBlue: '#005AA9',
        customGreen: '#10B981',
        customDarkBlue: '#091A4B',
        customWhite: '#F7F8F9',
        customGray: '#636363',
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
