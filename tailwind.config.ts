import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        "3xl": "1920px",
      },
      fontFamily: {
        mono: ["var(--font-mono)"],
      },
      fontSize: {
        tMono: "clamp(0.6rem,0.5143rem + 0.3571vi,0.9rem)",
        clampsm: "clamp(1.9531rem,1.496rem + 2.2854vi,3.5529rem)",
        clamp: "clamp(1rem, 0.9rem + 0.35vi, 1.25rem)",
        clampXl: "clamp(3rem,2.25rem + 3.75vi,5.625rem)",
        tSmall: "clamp(0.875rem, 0.5393rem + 0.5786vi, 1rem)",
        tBase: "clamp(1rem,0.9286rem + 0.3571vi,1.25rem)",
        tLarge: "clamp(1rem,0.8571rem + 0.7143vi,1.5rem)",
        tHeading: "clamp(1.5625rem,1.2474rem + 1.5755vi,2.6653rem)",
        tXLarge: "clamp(3.5rem,2.3571rem + 5.5143vi,10.5rem)",
      },
      padding: {
        p2xs: "clamp(0.5625rem,0.5446rem + 0.0893vi,0.625rem",
        p3xs: "clamp(0.3125rem,0.3125rem + 0vi,0.3125rem)",
        space3Xs: "clamp(0.875rem,0.8571rem + 0.0893vi,0.9375rem)",
        spaceXs: "clamp(0.3125rem,0.3125rem + 0vi,0.3125rem)",
        spaceSm: "clamp(1.125rem,1.0893rem + 0.1786vi,1.25rem)",
        spaceMd: "clamp(1.6875rem,1.6339rem + 0.2679vi,1.875rem)",
        spaceLg: "clamp(2.25rem,2.1786rem + 0.3571vi,2.5rem)",
        space2xl: "clamp(4.5rem,4.3571rem + 0.7143vi,5rem)",
      },
      gap: {
        space3Xs: "clamp(0.875rem,0.8571rem + 0.0893vi,0.9375rem)",
        spaceSm: "clamp(1.125rem,1.0893rem + 0.1786vi,1.25rem)",
        spaceMd: "clamp(1.6875rem,1.6339rem + 0.2679vi,1.875rem)",
        spaceXs: "clamp(0.3125rem,0.3125rem + 0vi,0.3125rem)",
        spaceXl: "clamp(4.5rem,4.3571rem + 0.7143vi,5rem)",
        space2xl: "clamp(4.5rem,4.3571rem + 0.7143vi,5rem)",
        fluidGap: "clamp(1rem,0.8571rem + 1.0143vi,3.5rem)",
      },
    },
  },
  plugins: [],
};
export default config;
