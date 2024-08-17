import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        stackSlide: "#242526",
      },
      transitionDuration: {
        "stack-sliding-time": "var(--stack-sliding-time)", // Custom duration
      },
      transitionTimingFunction: {
        "stack-slider-fnc": "var(--stack-slider-fnc)", // Custom easing function
      },
    },
  },
  plugins: [],
};
export default config;
