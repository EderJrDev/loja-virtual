/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height: {
        'full-size': '34rem',
      },
      width: {
        'full-size': '34rem',
      }
    },
  },
  plugins: [],
}

