import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#f97316",
        secondary: "#1f2937",
        light: "#f9fafb",
        muted: "#6b7280",
      },
    },
  },
  plugins: [],
};

export default config;