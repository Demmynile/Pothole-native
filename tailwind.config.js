/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryColor: "#1A1742",
      },
      fontFamily: {
        ultraFont: ["ultra"],
        interFont: ["inter"],
      },
    },
  },
  plugins: [],
};
