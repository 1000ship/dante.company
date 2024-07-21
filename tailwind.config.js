/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      zIndex: {
        "header": 100,
      },
      colors: {
        blossom: {
          DEFAULT: "#ff80b5",
          50: "#fff2f7",
          100: "#ffe6f0",
          200: "#ffcce1",
          300: "#ffb3d3",
          400: "#ff99c4",
          500: "#ff80b5",
          600: "#cc6691",
          700: "#994d6d",
          800: "#663348",
          900: "#331a24",
          950: "#1a0d12"
        },
        "twilight": {
          DEFAULT: "#9089fc",
          50: "#f7f7fe",
          100: "#e9e7fe",
          200: "#d3d0fe",
          300: "#bcb8fd",
          400: "#a6a1fd",
          500: "#9089fc",
          600: "#736eca",
          700: "#565297",
          800: "#3a3765",
          900: "#1d1b32",
          950: "#0d0b19"
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontSize: {
        'xxs': '0.625rem',
      },
    },
  },
  plugins: [],
}
