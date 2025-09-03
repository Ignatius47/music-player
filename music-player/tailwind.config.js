/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#121212", // dark background
        surface: "#1E1E1E",    // panels
        primary: "#1DB954",    // spotify green
        text: "#FFFFFF",
        muted: "#B3B3B3",
      },
    },
  },
  plugins: [],
}