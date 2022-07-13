/** @type {import("tailwindcss").Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xs: "380px",
      sm: "620px",
      md: "800px",
      lg: "1000px",
      xl: "1250px",
      "2xl": "1550px",
      // ...defaultTheme.screens,
    },
    // colors: {
    //   'blue': '#1fb6ff',
    //   'pink': '#ff49db',
    //   'orange': '#ff7849',
    //   'green': '#13ce66',
    //   'gray-dark': '#273444',
    //   'gray': '#8492a6',
    //   'gray-light': '#d3dce6',
    // },
    // fontFamily: {
    //   sans: ['Graphik', 'sans-serif'],
    //   serif: ['Merriweather', 'serif'],
    // },
    extend: {
      spacing: {
        18: "4.5rem",
        22: "5.5rem",
        26: "6.5rem",
        30: "7.5rem",
        128: "32rem",
        144: "36rem",
      },
    },
    //   borderRadius: {
    //     '4xl': '2rem',
    //   }
    // }
  },
  plugins: [require("tailwind-scrollbar"), require("@tailwindcss/line-clamp")],
};
