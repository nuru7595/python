/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      colors: {
        fg: '#4584b6',
        bg: '#ffde57'
      }
    },
    fontFamily: {
      ubuntu: ["Ubuntu", "sans-serif"]
    },
    container: {
      padding: {
        DEFAULT: "12px"
      },
      center: true
    }
  },
  plugins: [],
}