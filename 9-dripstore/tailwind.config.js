/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    colors: {
      primary: "#C92071",
      secondary: "#B5B6F2",
      tertiary: "#991956",
      error: "#EE4266",
      success: "#52CA76",
      warning: "#F6AA1C",
      primaryBackground: "linear-gradient(180deg, #C92071 0%, #EDABCA 100%)",
      secondaryBackground: "linear-gradient(180deg, #B5B6F2 0%, #EFEFFF 100%)"
    },
    extend: {},
  },
  plugins: [],
}

