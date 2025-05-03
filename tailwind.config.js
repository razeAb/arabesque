// tailwind.config.js
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        wiggle: "wiggle 0.5s ease-in-out",
      },
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-5deg)" },
          "50%": { transform: "rotate(5deg)" },
        },
      },
      colors: {
        bgPrimary: {
          light: "rgb(227, 227, 231)",
          dark: "rgb(26, 26, 26)",
        },
        bgSecondary: {
          light: "#F3F4F5",
          dark: "rgb(13, 13, 13)",
        },
        bgTried: {
          light: "#FFFF",
          dark: "rgb(26, 26, 26)",
        },
        navBg: {
          light: "rgb(245, 245, 248)",
          dark: "rgb(28,28,29)",
        },
        primaryText: {
          light: "rgb(27, 26, 31)",
          dark: "rgb(245, 245, 247)",
        },
        secondaryText: {
          light: "rgb(100, 99, 106)",
          dark: "#F3F4F6",
        },
        promo: {
          light: "#1F2937",
          dark: "#ffa500",
        },
        card: {
          light: "rgb(245, 245, 248)",
          dark: "rgb(48,50,53)",
        },
      },
      fontFamily: {
        Nunito: ["Nunito", "sans-serif"],
        Geist: ["Geist", "sans-serif"],
        Bebas: ["Bebas Neue", "sans-serif"],
      },
    },
  },
  plugins: [],
};
