/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'title': ['"Julius Sans One"']
      },
      colors: {
        'blackish': '#010409',
        'rich-black': '#1E1E1E',
        'xanthous': '#EAB308',
        'fire-engine': '#CC1923',
        'aero': '#58C0E4',
        'cadet-grey': '#A3A9B2',
        'platinum': '#DFE3E7' 
      }
    },
  },
  plugins: [],
}

