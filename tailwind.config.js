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
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
