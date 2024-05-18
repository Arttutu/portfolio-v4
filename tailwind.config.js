/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    
    extend: {
      fontFamily: {
        body: ["Inconsolata"],
      },
      colors: {
        //paleta de cor
        fundo: "#F5EED0",
        secundaria: "#177236"
        
      },
    },
  },
  plugins: [],
}
