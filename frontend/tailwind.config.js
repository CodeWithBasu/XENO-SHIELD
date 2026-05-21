/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'alien-dark': '#0a0a12',
        'neon-blue': '#00f0ff',
        'neon-green': '#39ff14',
      },
      fontFamily: {
        mono: ['"Courier New"', 'monospace'], // Fallback for now
      },
      animation: {
        'pulse-fast': 'pulse 1s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      }
    },
  },
  plugins: [],
}
