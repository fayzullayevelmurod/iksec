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
        "green": "#75C998",
        "white-20": "#FFFFFF33",
        "white-40": "#FFFFFF66",
        "home-linear": "rgba(2, 33, 59, 0.8);",
        "green-50": "rgba(28, 71, 82, 0.5)",
      },
    },
  },
  plugins: [],
};
