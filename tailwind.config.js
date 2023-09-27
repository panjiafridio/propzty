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
      }
    },
  },
  plugins: [],
}