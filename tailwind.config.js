/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontSize: {
        xxs: ["0.4rem", "0.8rem"],
      },
      backgroundImage: {
        "first-cosmos": "url('./components/images/cosmos.gif')",
        "mobile-million":
          "url('./components/images/mobile-images/millionbackground.jpg')",
        "mobile-background":
          "url('./components/images/mobile-images/mobileLoginBackground.png')",
        "mobile-landing-background":
          "url('./components/images/mobile-images/landingBackground.jpg')",
      },
      dropShadow: {
        email: "0px 0px 12px 0px #000000",
      },
      keyframes: {
        brush: {
          "0%, 100%": { transform: "rotate(45deg)" },
        },
      },
      boxShadow: {
        "third-section-left": "15px -15px 0 15px rgb(30 41 59)",
        "third-section-right": "-15px -15px 0 15px rgb(30 41 59)",
        "third-section-bottom":
          "0 15px 0 #fff, inset 0 -15px 0 rgba(255, 255, 255, 0.24), 0 45px 0 rgba(0, 0, 0, 0.15)",
        "third-section-icon-bottom":
          "0 15px 0 rgba(0, 0, 0, 0.1), inset 0 -8px 0 #fff",
        "login-mobile": "0px 0px 10px 1px rgb(100 116 139)",
      },
    },
    screens: {
      laptopL: { max: "1440px" },
      laptop: { max: "1024px" },
      tablet: { max: "768px" },
      lg: { max: "425px" },
      mlg: "425px",
      md: { max: "375px" },
      sm: { max: "320px" },
    },
  },
  plugins: [],
};
