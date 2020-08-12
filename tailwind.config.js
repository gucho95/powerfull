module.exports = {
  purge: ["./shared/**/*.{js,ts,jsx,tsx}", "./pages/**/*.{js,ts,jsx,tsx}"],

  theme: {
    height: {
      "90px": "90px",
      "110px": "110px",
      "200px": "200px",
      "400px": "400px",
    },
    screens: {
      xs: "0px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    extend: {
      width: {
        "300px": "300px",
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
