/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],

  daisyui: {
    styled: true,
    themes: false, // default light theme
    //themes: [], // disable theme and all colors
    //themes: ["light", "dark", "lemonade"], // include only required themes in project
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
    darkTheme: "dark",

    themes: [
      {
        mytheme: {
          primary: "#b1d100",
          "primary-focus": "#4506cb",
          "primary-content": "#ffffff",
          secondary: "#f75e00",
          "secondary-focus": "#bd0091",
          "secondary-content": "#ffffff",
          accent: "#6519ff",
          "accent-focus": "#2aa79b",
          "accent-content": "#ffffff",
          neutral: "#3d4451",
          "neutral-focus": "#2a2e37",
          "neutral-content": "#ffffff",
          "base-100": "#ffffff",
          "base-200": "#f9fafb",
          "base-300": "#d1d5db",
          "base-content": "#1f2937",
          info: "#2eb0ba",
          success: "#009485",
          warning: "#ff9900",
          error: "#ff5724",
        },
      },
    ],
  },
};

