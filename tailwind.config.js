const { screens } = require("tailwindcss/defaultTheme");
const breakpoints = require("./constants/breakpoints");

module.exports = {
  purge: ["./shared/**/*.{js,ts,jsx,tsx}", "./pages/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: breakpoints.px,
    container: {
      center: true,
      padding: {
        xs: "1rem",
      },
      maxWidth: {
        xs: "100%",
        xl: "1600px",
      },
    },

    extend: {
      boxShadow: {
        block: "0px 15px 10px 0px rgba(13, 12, 13, 0.78)",
        "block-hover": "0px 15px 11px 0px rgba(13,12,13,0.78)",
        "3d": `-1px -1px #3e3e3e, -2px -2px #3e3e3e, -3px -3px #3e3e3e, -4px -4px #3e3e3e, -5px -5px #3e3e3e,
        -6px -6px #3e3e3e, -7px -7px #3e3e3e, -8px -8px #3e3e3e`,
      },
      inset: {
        "18px": "18px",
        2: "2rem",
        4: "4rem",
        6: "6rem",
        8: "8rem",
      },
      zIndex: {
        70: "70",
        80: "80",
        90: "90",
        100: "100",
        200: "200",
        300: "300",
        400: "400",
        500: "500",
        600: "600",
      },
      margin: {
        "6px": "6px",
        "12px": "12px",
        "13px": "13px",
        "20px": "20px",
        "27px": "27px",
        "28px": "28px",
        "29px": "29px",
        "36px": "36px",
        "184px": "184px",
        "200px": "200px",
      },
      height: {
        "0.5px": "0.5px",
        "30px": "30px",
        "38px": "38px",
        "40px": "40px",
        "90px": "90px",
        "110px": "110px",
        "128px": "128px",
        "200px": "200px",
        "384px": "384px",
        "400px": "400px",
        "590px": "590px",
        "30vh": "30vh",
        "35vh": "35vh",
        "40vh": "40vh",
        "50vh": "50vh",
        "60vh": "60vh",
        "70vh": "70vh",
      },
      width: {
        "98px": "98px",
        "150px": "150px",
        "210px": "210px",
        "250px": "250px",
        "260px": "260px",
        "300px": "300px",
        "326px": "326px",
        "760px": "760px",
      },
      maxHeight: {
        "10vh": "10vh",
        "20vh": "20vh",
        "30vh": "30vh",
        "40vh": "40vh",
        "50vh": "50vh",
        "35vh": "35vh",
      },
      colors: {
        "primary-dark": "#0F1B1F",
        "primary-light": "#A2F0F9",
        "primary-blue": "#071530",
        "primary-gray": "#333",
        "primary-gray-1": "rgb(121, 121, 121)",
      },
    },
  },
  variants: {
    scale: ["responsive", "group-hover"],
    height: ["responsive", "group-hover"],
    backgroundColor: ["responsive", "group-hover"],
    border: ["active", "focus", "focus-within"],
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        ".container": {
          "@screen xs": {
            maxWidth: "100%",
          },
          "@screen sm": {
            maxWidth: "640px",
          },
          "@screen md": {
            maxWidth: "768px",
          },
          "@screen lg": {
            maxWidth: "1024px",
          },
          "@screen xl": {
            maxWidth: "1600px",
          },
        },
      });
    },
  ],
};
