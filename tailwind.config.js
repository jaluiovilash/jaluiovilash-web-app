/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#fff",
        secondary: "#000",
        light_white: "#f0f8ff",
        jaluiovilash: "#ffd700 ",
        icons: "#fff",
        dark_blue: "#002444",
      },
      fontFamily: {
        Time_Roman: ["Times New Roman", "serif"],
      },
      animation: {
        pulse_oneTime: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1)'
      }
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
}
