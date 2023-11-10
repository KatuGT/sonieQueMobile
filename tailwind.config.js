/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors:{
        default: "#a9a9a9",
        primary: "#0070f0",
        secondary: "#9455D3",
        success: "#18C964",
        warning: "#F5A524",
        danger: "#F31260",
        superDarkBlue: "#03001A",
        darkBlue: "#01002E",
      }
    },
  },
  plugins: [
  ],
}

