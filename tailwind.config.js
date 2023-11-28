/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        ibmPlexSerif: ["IBM Plex Serif", "serif"],
      },
      colors: {
        "christmas-red": "#FF4040",
        "christmas-green": "#3F5B2C",
      },
    },
  },
  plugins: [],
};
