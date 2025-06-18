import { defineConfig } from "@chakra-ui/react";

const config = defineConfig({
  globalCss: {
    "html, body": {
      bg: "#F9FAFB",
    },
  },
  theme: {
    tokens: {
      colors: {
        gray: {
          50: "#F6F7FA",
          100: "#EFF1F6",
          200: "#E4E6EB",
          300: "#D4D4D8",
          400: "#A1A1AA",
          500: "#71717A",
          600: "#52525B",
          700: "#3F3F46",
          800: "#27272A",
          900: "#1A1A1B",
          950: "#111111",
        },
        main: {
          25: "#F6F9FF",
          50: "#ECF2FF",
          100: "#E4ECFF",
          200: "#C5D4F7",
          400: "#849FDF",
          600: "#4C6BB5",
          800: "#394E80",
        },
      },
      fontWeights: {
        normal: "400",
        medium: "500",
      },
      fontSizes: {
        small: "14px",
        small2: "16px",
        medium: "18px",
        medium2: "22px",
        big: "24px",
        big2: "28px",
      },
    },
  },
});

export default config;

//дефолтные:
//тени, цвета, шрифты, бордер радиусы, размеры, кнопки