module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        hr: {
          DEFAULT: "#2EC866",     // primary green
          dark: "#18A35B",        // darker accent
          bg: "#0B1220",          // main site bg
          muted: "#B7C1C7",       // muted text
          code: "#071114",        // code block bg
        },
      },
      fontFamily: {
        sans: ['Inter', 'Poppins', 'system-ui', 'sans-serif'],
        mono: ['"Source Code Pro"', 'Roboto Mono', 'monospace'],
      },
    },
  },
  plugins: [],
};
