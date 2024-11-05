/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      sans: ["ui-sans-serif", "system-ui"],
      serif: ["ui-serif", "Georgia"],
      mono: ["ui-monospace", "SFMono-Regular"],
      display: ["Oswald"],
      body: ['"Open Sans"'],
    },
    extend: {
      colors: {
        "siemens-olive": "#959728",
        "siemens-green": "#30A387",
        "siemens-green-dark": "#008080",
      },
    },
    keyframes: {
      flipDown: {
        "0%": { transform: "rotateX(0deg)" },
        "100%": { transform: "rotateX(-180deg)" },
      },
    },
    animation: {
      "flip-down": "flipDown 600ms ease-in-out",
    },
  },
  plugins: [],
};
