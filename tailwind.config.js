module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: "Stick No Bills",
      serif: "Londrina Outline",
      mono: "Roboto",
    },
    extend: {
      backgroundColor: {
        primary: "#071c21",
        secondary: "#FCD34D",
        tertiary: "#10B981",
        modal: "#052C4F",
        experience: "#1C0C5B",
      },
      textColor: {
        heading: "#ffd000",
        bgheading: "#ffd000",
        lgtext: "#10B981",
        smtext: "#FCD34D",
      },
      boxShadow: {
        "3xl": "0px 0px 20px 5px black",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
