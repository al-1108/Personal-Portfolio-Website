/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./*.html",
    "./blogs/**/*.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Space Grotesk', 'sans-serif'],
      },
      width: {
        'image': '100%',
      },
      maxWidth: {
        'image': '300px',
      },
    },
  },
  plugins: [],
}
