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
        "green-dark": "#0F4158",
        "grey": "#5B6369",
        "black": "#052237",
        "blue-dark": "#31879C",
        "blue-light": "#F3F7F8",
        "white-20": "#FFFFFF33",
        "white-40": "#FFFFFF66",
        "white-90": "#FFFFFFE5",
        "home-linear": "rgba(2, 33, 59, 0.8);",
        "choose-linear": "rgba(2, 33, 59, 0.9);",
        "green-50": "rgba(28, 71, 82, 0.5)",
      },
    },
  },
  plugins: [],
};
