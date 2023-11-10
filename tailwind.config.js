/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    colors: {
      blue: "#00308F",
      "alice-blue": "#F0F8FF",
      "columbia-blue": "#B9D9EB",
      "marian-blue": "#E1EBEE",
      "chelsea-blue": "#034694",
      white: "#fff",
      black: "#000",
    },

    fontFamily: {
      open: ["Open Sans", "sans-serif"],
      montserrat: ["Montserrat", "sans-serif"],
    },
    extend: {
      animation: {
        wheel: "wheel 1s ease-in-out infinite",
      },
      keyframes: {
        wheel: {
          "0%": {
            transform: "translate(-50%,0)",
            opacity: "0",
          },
          "20%,70%": {
            opacity: "1",
          },
          "90%,100%": {
            transform: "translate(-50%,150%)",
            opacity: "0",
          },
        },
      },
    },
  },
  plugins: [],
};
