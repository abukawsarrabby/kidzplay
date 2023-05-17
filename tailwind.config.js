/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'coral': '#FF6B6B',
      'blue': '#54A0FF',
    },
    extend: {},
  },
  plugins: [require("daisyui")],
}

