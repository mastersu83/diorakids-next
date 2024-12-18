import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        customBlue: "var(--customBlue)",
        customBlueLight: "var(--customBlueLight)",
        customRed: "var(--customRed)",
      },
      keyframes: {
        "spinner-leaf-fade": {
          "0%, 100%": { opacity: "0" },
          "50%": { opacity: "1" },
        },
      },
      animation: {
        "spinner-leaf-fade": "spinner-leaf-fade 800ms linear infinite",
      },
    },
  },
  safelist: ["0", "188", "376", "564", "752"],
  plugins: [],
};
export default config;
