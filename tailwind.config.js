/** @type {import('tailwindcss').Config} */
export default {
  content: [    "./index.html",
  "./src/**/*.{js,ts,jsx,tsx,vue}",],
  theme: {
    extend: {
      colors : {
        'SunnyGradientColorTop' : "#5ABBF2",
        'SunnyGradientColorBottom' : "#53E2EB",
        'appWhite' : "#F2F9FD",
      },
    },
  },
  plugins: [],
}

