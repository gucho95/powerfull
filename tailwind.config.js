module.exports = {
  purge: ["./shared/**/*.{js,ts,jsx,tsx}", "./pages/**/*.{js,ts,jsx,tsx}"],

  theme: {
    container: {
      "max-width": "1600px",
    },
    screens: {
      xs: "0px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    extend: {
      zIndex: {
        "70": "70",
        "80": "80",
        "90": "90",
        "100": "100",
        "200": "200",
      },
      margin: {
        "6px": "6px",
        "13px": "13px",
        "20px": "20px",
        "29px": "29px",
        "36px": "36px",
        "184px": "184px",
        "200px": "200px",
      },
      height: {
        "38px": "38px",
        "40px": "40px",
        "90px": "90px",
        "110px": "110px",
        "128px": "128px",
        "200px": "200px",
        "384px": "384px",
        "400px": "400px",
      },
      width: {
        "98px": "98px",
        "150px": "150px",
        "210px": "210px",
        "300px": "300px",
        "326px": "326px",
        "760px": "760px",
      },
      colors: {
        "primary-dark": "#0F1B1F",
        "primary-light": "#A2F0F9",
        "primary-blue": "#071530",
      },
    },
  },
  variants: {},
  plugins: [],
};
