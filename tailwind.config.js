/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,ts,jsx,tsx,ts,js}", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#0b1326",
        surface: "#0b1326",
        "surface-container": "#171f33",
        "surface-container-low": "#131b2e",
        "surface-container-lowest": "#060e20",
        "surface-container-high": "#222a3d",
        "surface-variant": "#2d3449",
        primary: "#adc6ff",
        "on-primary": "#002e6a",
        secondary: "#4edea3",
        "on-surface": "#dae2fd",
        "on-surface-variant": "#c2c6d6",
        outline: "#8c909f",
        "outline-variant": "#424754",
        // Add more colors from the original config as needed
      },
      fontFamily: {
        display: ["Geist", "sans-serif"],
        "body-md": ["Geist", "sans-serif"],
        "body-lg": ["Geist", "sans-serif"],
        "code-md": ["JetBrains Mono", "monospace"],
        "label-caps": ["JetBrains Mono", "monospace"],
      },
      fontSize: {
        display: ["64px", { lineHeight: "1.1", letterSpacing: "-0.02em", fontWeight: "700" }],
        "headline-lg": ["32px", { lineHeight: "1.2", fontWeight: "600" }],
        "headline-md": ["24px", { lineHeight: "1.3", fontWeight: "600" }],
        "body-lg": ["18px", { lineHeight: "1.6" }],
        "body-md": ["16px", { lineHeight: "1.6" }],
        "code-md": ["14px", { lineHeight: "1.5" }],
        "label-caps": ["12px", { lineHeight: "1", letterSpacing: "0.05em", fontWeight: "600" }],
      },
      spacing: {
        gutter: "24px",
        "container-max": "1280px",
      },
    },
  },
  plugins: [],
};

