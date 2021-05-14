module.exports = {
  plugins: [
    require("tailwindcss"), // we want this time to use tailwind as plugin
    require("postcss-nested"),
    require("postcss-extend-rule"),
    require("autoprefixer"), // a plugin that automatically adds vendor prefexier
  ],
};
