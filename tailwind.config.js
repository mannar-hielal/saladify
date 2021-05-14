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
        textcolor: "#555555",
        brandcolor: "#49a010",
        whitecolor: "#ffffff",
        headingcolor: "#232d3b",
        headerborder: "#009222",
        navbarcolor: "#ddffd5",
        bordercolor: "#e8e8e8",
        graycolor: "#f5f5f5",
        pldrcolor: "#777777",
        starcolor: "#ffcc23",
        removecolor: "#ff3838",
        brandlight: "#65ff00",
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
