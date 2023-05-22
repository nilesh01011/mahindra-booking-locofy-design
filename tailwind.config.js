/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gray: "#191919",
        "colors-secondary-grey-4": "#dedede",
        "color-base": "#0b0b0c",
        red: "#dc1212",
        "colors-secondary-grey-2": "#635d5d",
        "color-cards": "#242424",
        yellow: "#ffff57",
        "colors-secondary-grey-3": "#8e8585",
        "colors-primary-white": "#fff",
        "colors-light-background": "#f4f4f4",
        "colors-primary-red": "#ff3e5b",
      },
      fontFamily: {
        "source-sans-pro": "'Source Sans Pro'",
        "typography-button-large": "Lato",
        inherit: "inherit",
      },
      borderRadius: {
        "3xs": "10px",
      },
    },
    fontSize: {
      sm: "14px",
      lg: "18px",
      base: "16px",
      "7xl": "26px",
      "29xl": "48px",
      "13xl": "32px",
      "5xl": "24px",
      xs: "12px",
      xl: "20px",
      "3xs": "10px",
    },
    screens: {
      lg: {
        max: "1200px",
      },
      md: {
        max: "960px",
      },
      sm: {
        max: "420px",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
