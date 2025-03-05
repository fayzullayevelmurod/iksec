/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.html", "./src/**/*.{js,ts,jsx,tsx,html}"],
  theme: {
    extend: {
      fontFamily: {
        Montserrat: ['"Montserrat"'],
      },
      screens: {
        "lg-plus": "992px",
      },
      colors: {
        "light-gray": "#313245B2",
      },
    },
  },
  plugins: [],
};
