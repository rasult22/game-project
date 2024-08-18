const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,svelte,ts,tsx,vue}"],
  theme: {
    backgroundSize: {
      auto: "auto",
      cover: "cover",
      contain: "contain",
      "250%": "200%",
      16: "4rem",
    },
    backgroundPosition: {
      "p-100%": "100%",
      "p-50%": "50%",
      bottom: "bottom",
      "bottom-4": "center bottom 1rem",
      center: "center",
      left: "left",
      "left-bottom": "left bottom",
      "left-top": "left top",
      right: "right",
      "right-bottom": "right bottom",
      "right-top": "right top",
      top: "top",
      "top-4": "center top 1rem",
    },
    extend: {
      animation: {
        text: "text 10s ease-in infinite",
        walk: "30s linear 0s infinite normal none running walk",
      },
      keyframes: {
        walk: {
          "0%": {
            transform: ['translateX(-200px)']
          },
          "10%": {
            transform: ['translateX(-400px)']
          },
          "20%": {
            transform: ['translateX(-600px)']
          },
          "30%": {
            transform: ['translateX(-800px)']
          },
          "40%": {
            transform: ['translateX(-1000px)']
          },
          "50%": {
            transform: ['translateX(-1200px)']
          },
          "60%": {
            transform: ['translateX(-1400px)']
          },
          "70%": {
            transform: ['translateX(-1600px)']
          },
          "80%": {
            transform: ['translateX(-1800px)']
          },
          "90%": {
            transform: ['translateX(-2000px)']
          },
          "100%": {
            transform: ['translateX(-2200px)']
          },
        },
        text: {
          "0%": {
            transform: ["translateY(0%)"],
          },
          "25%": {
            transform: ["translateY(-100%)"],
          },
          "50%": {
            transform: ["translateY(-200%)"],
          },
          "75%": {
            transform: ["translateY(-200%)"],
          },
          "95%": {
            transform: ["translateY(-200%)"],
          },
          "100%": {
            transform: ["translateY(0%)"],
          },
        },
      },
      fontFamily: {
        sans: ["Inter Variable", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        "app-bg": "#091720",
        "app-bg-2": "#0B3D5D",
        "app-grey-text": "#DBE2EA",
        "app-border":
          "linear-gradient(90deg, #0B63F6 0%, #9F87FF 43%, #08D5EC 73%, #41F892 100%);",
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",
      },
      boxShadow: {
        layout: "0 -1px 3px 0 rgba(7, 10, 14, 0.8);",
        card: "0 0 36px 0 #1da1f2;",
      },
      fontFamily: {
        Inter: ["Inter Variable"],
        Oxanium: ["Oxanium"],
      },
      textColor: {
        default: "var(--color-text)",
        offset: "var(--color-text-offset)",
      },
      backgroundColor: {
        default: "var(--color-background)",
        offset: "var(--color-background-offset)",
      },
      borderColor: {
        default: "var(--color-border)",
      },
      screens: {
        "custom-screen": { raw: "(max-height: 670px)" },
        lg: { min: "1000px" },
        md: { max: "1000px", min: "700px" },
        sm: { max: "700px", min: "0px" },
        "3xl": { min: "2000px" },
      },
    },
  },
  plugins: [require("tailwindcss-fluid-type")],
};
