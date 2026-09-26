/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./src/**/*.{js,jsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        brand: {
          blue: {
            DEFAULT: "#0070C0",
            light: "#2596BE",
            dark: "#005696",
            navy: "#0F172A",
            deep: "#090D16",
          },
          red: {
            DEFAULT: "#C81E2B",
            light: "#E13442",
            dark: "#A01420",
          },
          yellow: {
            DEFAULT: "#FFD100",
            light: "#FFE047",
            dark: "#D9B000",
          },
          slate: {
            50: "#F8FAFC",
            100: "#F1F5F9",
            200: "#E2E8F0",
            700: "#334155",
            800: "#1E293B",
            900: "#0F172A",
          }
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      boxShadow: {
        'glow-blue': '0 4px 20px -2px rgba(0, 112, 192, 0.25)',
        'glow-red': '0 4px 20px -2px rgba(200, 30, 43, 0.25)',
        'glow-yellow': '0 4px 20px -2px rgba(255, 209, 0, 0.25)',
        'card': '0 4px 20px rgba(15, 23, 42, 0.06)',
        'card-hover': '0 12px 30px rgba(0, 112, 192, 0.12)',
      },
    },
  },
  plugins: [],
};
