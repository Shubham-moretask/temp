/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'instrument': ['Instrument Sans', 'system-ui', '-apple-system', 'sans-serif'],
        'pangram': ['Pangram', 'system-ui', '-apple-system', 'sans-serif'], // Local Pangram font
        'sans': ['Instrument Sans', 'system-ui', '-apple-system', 'sans-serif'], // Set as default
        'hindi': ['Noto Sans Devanagari', 'Instrument Sans', 'system-ui', '-apple-system', 'sans-serif'], // Hindi font
      },
    },
  },
  plugins: [],
}