/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        lexend: ['"Lexend Zetta"', 'sans-serif'], // Agrega la fuente aquí
        inter: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
