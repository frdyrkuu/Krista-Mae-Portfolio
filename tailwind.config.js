/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "*.html"],
  theme: {
    fontFamily: {
      brownsugar: ["Brown Sugar", "sans-serif"]
    },
    extend: {
      animation: {
      
        marquee: 'marquee 50s linear infinite',
        marquee2: 'marquee2 50s linear infinite',
        marquee3: 'marquee3 50s linear infinite',
        marquee4: 'marquee4 50s linear infinite',
     
      },
      keyframes: {
     
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        marquee2: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        marquee3: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(100%)' }, // Adjusted to move to the right
        },
        marquee4: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0%)' }, // Adjusted to move to the right
        },
     
      },

    },
  },
  plugins: [],
}