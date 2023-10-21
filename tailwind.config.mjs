/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        orange: "#FF601F",
        "gray-100": "#FCFCFD",
        "gray-300": "#F2F4F7",
        "gray-500": "#D0D5DD",
        "gray-600": "#98A2B3",
        "gray-1000": "#1D2939",
        "gray-1100": "#101828",
      },
      backgroundImage: {
        gradient1:
          "linear-gradient(0deg, rgba(16,24,40,0.60) 0%, rgba(16,24,40,0.60) 100%)",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        noto: ["Noto Sans", "sans-serif"],
        plus: ["Plus Jakarta Sans", "sans-serif"],
        redhat: ["Red Hat Display", "sans-serif"],
      },
    },
  },
  plugins: [],
};
