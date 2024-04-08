/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Anta: ["Anta"],
        Montserrat: "Montserrat",
      },
      padding: {
        primary: "2rem 1.4rem 2rem 7.2rem",
        primarymd: "1rem 1rem 1rem 6rem",
        primarysm: " 1.6rem 1rem 1rem 5rem",
      },
      height: {
        moviecardtb: "500px",
      },
      keyframes: {
        fadein: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeout: {
          "0%": { opacity: "1" },
          "100%": { opacity: "0" },
        },
      },
      animation: {
        fadein: "fadein 0.5s ease-out forwards",
        fadeout: "fadeout 0.5s ease-out forwards",
      },
    },
  },
  plugins: [],
};
