/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#3CB371',
        secondary: '#90EE90',
        background: '#F5F5F5',
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
  important: 'body',
}
