module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        'med': ['SF Pro Display Medium'],
        'reg': ['SF Pro Display Regular']
      },
      maxWidth: {
        "2lg": "1200px",
        "3xl": "1600px"
      }
    },
  },
  plugins: [require("tw-elements/dist/plugin")],
}
