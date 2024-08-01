/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'color-red': 'hsl(0, 100%, 74%) ',
        'color-green': 'hsl(154, 59%, 51%)',
        'color-blue': 'hsl(248, 32%, 49%)',
        'color-dark-blue': 'hsl(249, 10%, 26%)',
        'color-grayish-blue': 'hsl(246, 25%, 77%)'
      },
      fontFamily: {
        'Poppins': ["Poppins"]
      },
      backgroundImage: {
        'image-large': "url('/src/assets/bg-intro-desktop.png')",
        'image-small': "url('/src/assets/bg-intro-mobile.png')"
      }
    },
  },
  plugins: [],
}

