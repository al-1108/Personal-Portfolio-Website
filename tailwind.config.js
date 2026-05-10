/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
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
