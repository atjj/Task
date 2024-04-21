/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './**/*.{html,js}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'main-background': "url('/assets/background/backgroundMain.jpg')",
        'video-background': "url('/assets/background/background2.jpg')",
        'form-background': "url('/assets/background/formBackground.jpeg')"

      }
    },
  },
  plugins: [],
}