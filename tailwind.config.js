/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        signature: ["Great Vibes"],
      },
      keyframes: {
        rubberband: {
          "0%": {
            transform: "scaleY(0.9)",
          },
          "50%": {
            transform: "scaleY(1.30)",
          },
          "100%": {
            transform: "scaleY(1)",
          },
        }
      },
      animation: {
        "rubber-band": "rubberband 0.6s linear infinite ",
      },
    },
  },
  plugins: [],
}

