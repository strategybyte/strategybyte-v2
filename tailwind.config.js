/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Epilogue", "sans-serif"],
      },
      animation: {
        "fade-in-up": "fadeInUp 0.8s ease-out forwards",
        ping: "ping 2s cubic-bezier(0, 0, 0.2, 1) infinite",
        "left-right-one": "leftRightOne 8s infinite",
        "left-right-two": "leftRightTwo 8s infinite",
        "zoom-in-out": "zoomInOut 4s infinite",
        "zoom-in-out-delayed": "zoomInOut 4s linear 2s infinite",
      },
      keyframes: {
        fadeInUp: {
          "0%": {
            opacity: "0",
            transform: "translateY(30px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        ping: {
          "0%": {
            transform: "scale(1)",
            opacity: "0.3",
          },
          "50%": {
            transform: "scale(1.5)",
            opacity: "0",
          },
          "51%": {
            transform: "scale(1)",
            opacity: "0",
          },
          "100%": {
            transform: "scale(1)",
            opacity: "0.3",
          },
        },
        leftRightOne: {
          "0%, 100%": {
            transform: "translateX(0)",
          },
          "50%": {
            transform: "translateX(20px)",
          },
        },
        leftRightTwo: {
          "0%, 100%": {
            transform: "translateX(0)",
          },
          "50%": {
            transform: "translateX(-20px)",
          },
        },
        zoomInOut: {
          "0%, 100%": {
            transform: "scale(1)",
          },
          "50%": {
            transform: "scale(0.5)",
          },
        },
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          50: "#f0f9ff",
          500: "#3b82f6",
          600: "#2563eb",
        },
        secondary: {
          500: "#10b981",
        },
        yellow: {
          400: "#D6F037",
        },
        green: {
          400: "#28F67A",
        },
      },
    },
  },
  plugins: [],
};
