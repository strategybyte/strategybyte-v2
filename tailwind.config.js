/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "480px",
      },
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
        marquee: "marquee 30s linear infinite",
        "gradient-x": "gradient-x 3s ease infinite",
        "spin-slow": "spin 8s linear infinite",
        "spin-slow-reverse": "spin 8s linear infinite reverse",
        sparkle: "sparkle 1.5s ease-in-out infinite",
        "sparkle-delayed": "sparkle 1.5s ease-in-out 0.75s infinite",
        "particle-1": "particle-1 2s ease-in-out infinite",
        "particle-2": "particle-2 2s ease-in-out infinite",
        "particle-3": "particle-3 2s ease-in-out infinite",
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
        marquee: {
          "0%": {
            transform: "translateX(0%)",
          },
          "100%": {
            transform: "translateX(-50%)",
          },
        },
        "gradient-x": {
          "0%, 100%": {
            "background-size": "200% 200%",
            "background-position": "left center",
          },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "right center",
          },
        },
        sparkle: {
          "0%, 100%": {
            opacity: 0,
            transform: "scale(0)",
          },
          "50%": {
            opacity: 1,
            transform: "scale(1)",
          },
        },
        "particle-1": {
          "0%": {
            transform: "translate(0, 0)",
            opacity: 0,
          },
          "50%": {
            transform: "translate(100px, -50px)",
            opacity: 1,
          },
          "100%": {
            transform: "translate(200px, 0)",
            opacity: 0,
          },
        },
        "particle-2": {
          "0%": {
            transform: "translate(0, 0)",
            opacity: 0,
          },
          "50%": {
            transform: "translate(-100px, -50px)",
            opacity: 1,
          },
          "100%": {
            transform: "translate(-200px, 0)",
            opacity: 0,
          },
        },
        "particle-3": {
          "0%": {
            transform: "translate(0, 0)",
            opacity: 0,
          },
          "50%": {
            transform: "translate(0, -100px)",
            opacity: 1,
          },
          "100%": {
            transform: "translate(0, -200px)",
            opacity: 0,
          },
        },
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        // primary: {
        //   50: "#f0f9ff",
        //   500: "#3b82f6",
        //   600: "#2563eb",
        // },
        // secondary: {
        //   500: "#10b981",
        // },

        primary: {
          DEFAULT: "#2f3f61", // Deep Koamaru
        },
        secondary: {
          DEFAULT: "#ffc605", // Golden Poppy
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
