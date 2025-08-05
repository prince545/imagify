// tailwind.config.js
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        outerBlue: "#acc1f8",
        innerBlue: "#c4d9ff",
      },
      backgroundImage: {
        'diag-white-inner': 'linear-gradient(135deg, white 0%, #c4d9ff 100%)',
      },
    },
  },
  plugins: [],
};
