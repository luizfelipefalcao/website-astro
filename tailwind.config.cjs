/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Graphik", "Inter Variable", "Inter", ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        blg: ['1.1875rem', '1.75rem']
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
      animation: {
        marquee: "marquee 50s linear infinite",
      },
      keyframes: {
        marquee: {
          from: {
            transform: "translateX(0)",
          },
          to: {
            transform: "translateX(calc(-100% - 2.5rem))",
          },
        },
      },
      screens: {
        '2xsm': '495px',
        'cookie-banner': "930px",
        'xsm': '550px',
        '2xl': '1400px',
      },
      colors: {
        'goose-pink': '#F72697',
        'button-pink': '#F89ECA',
        'bg-pink': '#FFCAE7',
        'pale-pink': '#FFD9ED',
        'dark-pink': "#CF1278",
        'deep-pink': "#800044",
        'canvas-grey': "#F4F4F4",
        'deep-turquoise': '#005252',
        'dark-turquoise': '#35A1A1',
        'subtle-pink': '#F0E0E9',
        'pale-yellow': "#FFF2CF",
        'dark-yellow': "#AC6D0E",
        'deep-yellow': "#6E4119",
        'goose-turquoise': '#6BC9C9',
        'pale-turquoise': '#C4EBEB',
        'grey-text': '#494949',
        'night-sky': '#14162C',
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
