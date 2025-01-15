import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        primary: '#F27423',
        secondary: '#1A3668',
        accent: '#FFE5D1',
      },
      fontFamily: {
        prompt: ['Prompt', 'sans-serif'],
        sarabun: ['Sarabun', 'sans-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config;
