module.exports = {
  prefix: "tw-",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false,
  theme: {
    extend: {},
  },
  variants: {
    extend: {}
  },
  plugins: [require("@tailwindcss/forms")],
};
