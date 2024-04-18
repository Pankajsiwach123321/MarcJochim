/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'white-100': '#FFFCFA',
        'white-200': '#F5FAFF',
        'orange-white-100': '#F77B0B',
        'gray-white-100': '#4D4D4D',
        'blue-dark-100': '#003E92',
      },
      backgroundSize: {
        'fullsize': '100% 100%'
      },
      fontFamily: {
        'inter': "Inter, 'sans-serif'",
        'poppines': "Poppins, 'sans-serif'",
      },
      maxWidth: {
        'content': '1164px'
      },
      backgroundImage: {
        bgButton: 'linear-gradient(107.9deg, #0C5FD1 1.25%, #8703C5 93.71%)',
        bgButtonnone: 'none'
      },
      animation: {
        'spin-slow': 'wiggle 300ms linear  2 forwards',
        'spin-flower': 'flower 60s linear infinite forwards',
      },
      keyframes: {
        wiggle: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(13deg)' },
        },
        flower: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        }
      },
    },
  },
  plugins: [],
}