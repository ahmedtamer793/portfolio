/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        accent: {
          cyan: "hsl(188, 100%, 50%)",
          blue: "hsl(218, 100%, 58%)",
        }
      }
    },
  },
  plugins: [],
}