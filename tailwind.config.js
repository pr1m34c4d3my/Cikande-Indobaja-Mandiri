/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        artikelSatu: "url('./assets/pipa.jpg')",
        mainBg: "url('./assets/mainbg3.png')",
      },
    },
  },
  plugins: [],
};
