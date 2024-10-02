/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/components/*/.(js,ts,jsx,tsx,mdx)"
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient': 'linear-gradient(109.6deg, rgb(36, 45, 57) 11.2%, rgb(16, 37, 60) 51.2%, rgb(0, 0, 0) 98.6%)',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'], // Add Poppins font
      },
    },
  },
  plugins: [],
}