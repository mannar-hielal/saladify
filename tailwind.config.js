module.exports = {
  purge: {
    enabled: process.env.NODE_ENV === "production",
    layers: ["components", "utilities", "base"],
    content: [
      "./src/**/*.html",
      "./src/**/*.vue",
      "./src/**/*.jsx",
      "./src/**/*.js",
    ],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        watermelon: "#c7d66d",
        errorBg: "#fff6f6",
        errorBorder: "#e0b4b4",
        errorColor: "#9f3a38",
        successbg: "#f8f8f9",
        successBorder: "#a9d5de",
        successColor: "#74c14b",
      },
      fontFamily: {
        playfairDisplay: "Playfair Display",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
