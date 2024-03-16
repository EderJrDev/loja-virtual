/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
  ],
  mode: 'jit',
  purge: [
    "./index.html",
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

