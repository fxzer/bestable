/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#1D324B',
        'bgray': '#AFB8BC',
      },
      boxShadow: {
        'rd': '0 0  4px  rgba(0, 0, 0, 0.2)',
      }
    },
  },
  plugins: [],
}