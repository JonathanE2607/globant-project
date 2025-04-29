/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: 
      {
        Roboto: "Roboto",
      },
      colors:{
       "custom-blue": "#40FFDF",
       "custom-blue-icon": "#35CAB1",
       "custom-purpple": "#A374FF",
       "custom-purpple-icon": "#8D52FF",
       "custom-orange": "#FFB44B",
      }
    },
  },
  plugins: [],
};
