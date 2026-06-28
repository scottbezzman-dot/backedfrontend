/** @type {import('tailwindcss').Config} */
module.exports = {
  prefix: "tw-",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  corePlugins: {
    preflight: false, // don't override global h1, p, button, etc.
  },
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "Poppins", "Quicksand", "Nunito",
          "system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI",
          "Roboto", "Helvetica Neue", "Arial", "Noto Sans",
          "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji",
        ],
      },
      colors: {
        white: "hsl(0, 0%, 100%)",
        "primary-yellow": "rgb(222, 248, 76)",
        "primary-green": "rgb(90, 223, 137)",
        "primary-cyan": "rgb(54, 218, 229)",
        "primary-blue": "rgb(33, 212, 225)",
        "neutral-900": "rgb(20, 20, 20)",

        "dark-background": "rgb(26, 32, 44)",
        "card-dark-bg": "rgb(45, 55, 72)",
        "feature-card-bg": "rgb(45, 55, 72)",

        "coiner-yellow-green": "#DEF84C",
        "coiner-green": "rgb(90, 223, 137)",
        "coiner-cyan": "#21D4E1",

        "coiner-dark-gray": "rgb(20, 20, 20)",
        "coiner-card-bg": "#262632",
        "coiner-super-dark-bg": "rgb(10, 10, 10)",
        "coiner-step-border-gray": "rgb(89, 86, 109)",
        "coiner-card-bg-primary": "#1A1A1E",
        "coiner-border-gray": "rgb(89, 86, 109)",
        "coiner-text-dark": "rgb(20, 20, 20)",

        "coiner-faq-bg": "rgb(34, 33, 38)",

        "coiner-gradient-start": "rgba(255, 255, 255, 0.1)",
        "coiner-gradient-end": "rgba(255, 255, 255, 0.05)",
        "coiner-tab-bg-active": "rgb(11, 14, 14)",

        "icon-wallet-bg": "rgb(103, 100, 251)",
        "icon-account-bg": "rgb(255, 44, 221)",
        "icon-register-bg": "rgb(255, 148, 18)",
        "icon-trading-bg": "rgb(17, 227, 38)",
        "icon-reports-bg": "rgb(214, 239, 81)",
        "icon-planner-bg": "rgb(35, 199, 211)",
        "icon-community-bg": "rgb(255, 255, 255)",

        "check-green": "#00F050",

        "blur-ethereum-blue": "rgb(77, 109, 233)",
        "blur-litecoin-yellow": "rgb(249, 188, 45)",
        "blur-bitcoin-orange": "rgb(247, 147, 26)",
        "blur-tether-green": "rgb(38, 161, 123)",
        "blur-binance-orange": "rgb(243, 186, 47)",
        "blur-xrp-black": "rgb(0, 0, 0)",
        "blur-hype-blue": "rgb(77, 109, 233)",
        "blur-cardano-blue": "rgba(81, 95, 152, 1)",
        "blur-doge-yellow": "rgba(158, 158, 38, 1)",
        "blur-solana-green": "rgba(77, 233, 223, 1)",
        "blur-tron-red": "rgba(233, 33, 26, 1)",
        "blur-leo-yellow":"rgba(126, 98, 5, 1)",

        'coiner-green': '#5adf89', // The vibrant green for text/accents
        'dark-background': '#1a1a1a', // Main background black
        'card-bg': '#f9fafb', // Light background for the cards
        'light-text': '#a0a0a0', // Lighter gray text
        'dark-text': '#272727'
      },
      keyframes: {
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0) rotate(0deg)" },
          "25%": { transform: "translateY(-10px) rotate(5deg)" },
          "75%": { transform: "translateY(10px) rotate(-5deg)" },
        },
        floatSlow: {
          "0%, 100%": { transform: "translateY(0) rotate(0deg)" },
          "33%": { transform: "translateY(-15px) rotate(8deg)" },
          "66%": { transform: "translateY(15px) rotate(-8deg)" },
        },
        floatReverse: {
          "0%, 100%": { transform: "translateY(0) rotate(0deg)" },
          "25%": { transform: "translateY(10px) rotate(-5deg)" },
          "75%": { transform: "translateY(-10px) rotate(5deg)" },
        },
        // scroll: {
        //   "0%": { transform: "translateX(0)" },
        //   "100%": { transform: "translateX(-50%)" },
        // },
        scroll: {
          "0%": {
            transform: "translateX(0)",
            "-webkit-transform": "translateX(0)",
          },
          "100%": {
            transform: "translateX(-50%)",
            "-webkit-transform": "translateX(-50%)",
          },
        },
        "marquee-rtl": {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        "fade-in-up": "fadeInUp 0.6s ease-out forwards",
        "fade-in": "fadeIn 0.6s ease-out forwards",
        float: "float 4s ease-in-out infinite",
        "float-slow": "floatSlow 6s ease-in-out infinite",
        "float-reverse": "floatReverse 5s ease-in-out infinite",
        "infinite-scroll": "scroll 40s linear infinite",
        "marquee-rtl": "marquee-rtl var(--marquee-duration) linear infinite",

      },
    },
  },
  plugins: [],
}
