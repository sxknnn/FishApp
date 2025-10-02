/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-1': '#09090a',
        'dark-2': '#1c1c21',
        'dark-3': '#2a2a31',
        'dark-4': '#3a3a45',
        'light-1': '#ffffff',
        'light-4': '#a1a1b5',
        'primary-500': '#6c5ce7',
        'red': '#ef4444',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      spacing: {
        465: '465px',
      },
    },
  },
  plugins: [import('tailwindcss-animate')],
};
