module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        gray: { 50: "#f9f9fe", 100: "#f2f2f2", 300: "#e0e0e0", 600: "#828282" },
        black: { 900: "#000000", "900_4c": "#0000004c", "900_33": "#00000033" },
        orange: { A200: "#f2994a", A200_33: "#f2994a33" },
        blue: { A400: "#2f80ed", A400_33: "#2f80ed33" },
        green: {
          500: "#3eb957",
          600: "#27ae60",
          "800_7f": "#258a397f",
          "600_33": "#27ae6033",
        },
        purple: { "400_33": "#9b51e033" },
        blue_gray: { 900: "#333333", "900_01": "#343434" },
        white: { A700: "#ffffff" },
      },
      fontFamily: { poppins: "Poppins", nunito: "Nunito", inter: "Inter" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
