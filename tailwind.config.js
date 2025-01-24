import { s } from 'motion/react-client';

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
        }
      },
    },
    plugins: [],
    prefix: "tw-",
  }

