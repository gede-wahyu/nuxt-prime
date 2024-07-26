/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  safelist: [
    {
      pattern: /bg-(.+)-(400|500)/,
    },
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "var(--p-primary-50)",
          100: "var(--p-primary-100)",
          200: "var(--p-primary-200)",
          300: "var(--p-primary-300)",
          400: "var(--p-primary-400)",
          500: "var(--p-primary-500)",
          600: "var(--p-primary-600)",
          700: "var(--p-primary-700)",
          800: "var(--p-primary-800)",
          900: "var(--p-primary-900)",
          950: "var(--p-primary-950)",
        },
        surface: {
          50: "var(--p-surface-50)",
          100: "var(--p-surface-100)",
          200: "var(--p-surface-200)",
          300: "var(--p-surface-300)",
          400: "var(--p-surface-400)",
          500: "var(--p-surface-500)",
          600: "var(--p-surface-600)",
          700: "var(--p-surface-700)",
          800: "var(--p-surface-800)",
          900: "var(--p-surface-900)",
          950: "var(--p-surface-950)",
        },
      },
    },
  },
  plugins: [],
};
