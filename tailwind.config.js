/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage:{
        starBanner:"url(../dist/img/xl-hero-desktop_2021.png)",
        bituinBanner:"url(../dist/img/hero-mobile_2021.webp)"
      },
      colors:{
        dark:"#2b2b2b",
        light:"#ffffff",
        berde:"#006341",
        lberde:"#d4e9e2",
      }
    },
  },
  plugins: [],
}
