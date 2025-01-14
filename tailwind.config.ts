import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    colors: {
      primary: '#40BFB4',
      secondary: '#FFB5A7',
      accent: '#333333',
    },
    extend: {
      fontFamily: {
        itim: ['Itim', 'cursive'],
        prompt: ['Prompt', 'sans-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config;
