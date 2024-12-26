/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      padding: {
        DEFAULT: "12px"
      },
      center: true
    },
    extend: {
      fontFamily: {
        ubuntu: ["Ubuntu", "sans-serif"]
      },
      colors: {
        fg: '#ffde57',
        bg: '#4584b6'
      }
    }
  },
  plugins: [],
}