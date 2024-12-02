/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        avenirBlack: "AvenirBlack",
        avenirMedium: "AvenirMedium",
        avenirItalic: "AvenirItalic",
        sharpSemiBold25: "SharpSemiBold25",
        avenir85Heavy: "Avenir85Heavy",
        avenir55Roman: "Avenir55Roman"
      },
      colors: {
        background: "#22242E",
        secondary: "#DD7E71"
      },
      boxShadow: {
        'custom-dark': '10px 10px 20px 4px rgba(0, 0, 0, 0.2)'
      }
    },
  },
  plugins: [],
}