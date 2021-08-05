module.exports = {
  purge: ["./public/index.html", "./src/**/*.svelte"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    scale: {
      25: ".25",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
