import { defineConfig, defineRecipe } from "@chakra-ui/react";

const config = defineConfig({
  globalCss: {
    "html, body": {
      bg: "another.bg",
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
        red: {
          800: "#A43737",
        },
        green: {
          100: "#E2F3D6",
          800: "#528251",
        },
        another: {
          wh: "#ffffff",
          bg: "#F9FAFB",
          btn_log_in: "#1A1A1B",
          bl: "#111111",
          line: "#F2F2F2",
          delayed: "#F4A329",
          failure: "#D80F0F",
          processed: "#7FB86E",
          error: "#D97474",
          errorbg: "#FFECEC",
        },
      },
      fonts: {
        main: "'Roboto', sans-serif",
      },
      shadows: {
        variant_a: "0px 3px 8px 0px #0000000D",
        variant_b: "0px 8px 40px 0px #00000014",
      },
      radii: {
        small: "4px",
        medium: "8px",
        medium2: "10px",
        big: "16px",
      },
      fontWeights: {
        normal: "400",
        medium: "500",
      },
      fontSizes: {
        verySmall: "10px",
        little: "12px",
        verySmall2: "13px",
        small: "14px",
        small2: "16px",
        medium: "18px",
        medium2: "22px",
        big: "24px",
        big2: "28px",
      },
      lineHeights: {
        small: "14px",
        little: "16px",
        little2: "18px",
        small2: "20px",
        medium: "30px",
        big: "40px",
      },
      spacing: {
        negativeSmall: "-1px",
        negativeMedium: "-16px",
        nothing: "0px",
        veryLittle: "2px",
        little: "4px",
        little2: "6px",
        small: "8px",
        small2: "10px",
        medium: "12px",
        medium2: "13px",       
        medium3: "16px",
        big: "20px",
        big2: "24px",
        big3: "30px",
        big4: "32px",
        giant: "40px",
        veryHuge: "368px",
      },
    },
  },
});

export const buttonRecipe = defineRecipe({
  base: {
    type: "submit",
  },
  variants: {
    visual: {
      solid: {bg: "another.btn_log_in", color: "another.bg" },
      outline: { borderRadius: "big" }
    },
    size: {
      normal: { padding: "medium2", mt: "big", fontSize: "small2", fontFamily: "main", width: "100%" }
    },
  },
});

export default config;

