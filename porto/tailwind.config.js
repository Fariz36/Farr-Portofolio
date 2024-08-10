/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
        screens: {
          'sm': '640px',
          'md': '768px',
          'lg': '1024px',
          'xl': '1280px',
        },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },

      colors: {
        'custom-red' : "#921A40",
        'custom-red-100' : "#C75B7A",
        'custom-red-200' : "#D9ABAB",
        'custom-white' : "#F4D9D0",
        'bgr-colors-1' : "#F4F4F9",
        'bgr-colors-2' : "#D9E8EB",
        'bgr-colors-3' : "#C4DFE6",
        'bgr-colors-4' : "#AFD2D6",
        'bgr-colors-5' : "#9FC7CB",
      },
    },
  },
  plugins: [],
};
