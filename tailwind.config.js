/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'new-orange': 'hsl(26, 100%, 55%)',
        "pale-orange": "hsl(25, 100%, 94%)"
      },
      maxHeight: {
        '128': '32rem',
      }
    },
  },
  plugins: [],
}
