/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'Interior1': "url('/src/assets/Interior1.jpg')",
        'Hero': "url('/src/assets/Room.jpg')",
        'About': "url('/src/assets/roomtwo.jpg')",
      }
    },
    screens : {
      'lg': '1020px',
      'md': '770px',
      'sm': '430px',
    }
  },
  plugins: [],
}