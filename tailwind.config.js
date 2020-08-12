module.exports = {
  purge: ["./components/**/*.{js,ts,jsx,tsx}", "./pages/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xs: "0px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    extend: {
      colors: {
        "primary-dark": "#0F1B1F",
        "primary-light": "#A2F0F9",
      },
    },
  },
  variants: {},
  plugins: [],
};
