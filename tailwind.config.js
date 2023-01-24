/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "var(--primary)",
        "secondary": "var(--secondary)",
        "background": "var(--background)",
        "foreground": "var(--foreground)",
        "input": "var(--input)",
        "placeholder": "var(--placeholder)",
        "header": "var(--header)",
      },
    },
  },
  plugins: [],
}
