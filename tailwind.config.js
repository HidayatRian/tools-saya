/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      colors: {
        primary: "#84cc16",
        secondary: "#64748b",
        dark: "#0f172a",
        pink: "#FF0066",
        youtube: "#FF0000",
        instagram: "#E4405F",
        github: "#181717",
        linkedin: "#0A66C2",
        gmail: "#EA4335",
        red: "#b91c1c",
      },
      screens: {
        "2xl": "1320px",
      },
    },
  },
  plugins: [],
};
