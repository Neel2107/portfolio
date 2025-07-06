/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
      extend: {
        fontFamily:{
          satisfy:['Satisfy', 'cursive'],
        },
        maxWidth: {
          'laptop': '1200px',
        },
        screens: {
          'laptop': '1024px',
        }
      },
  },
  plugins: [],
  prefix: '', 
}

