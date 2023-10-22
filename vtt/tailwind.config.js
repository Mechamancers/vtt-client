/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'title': ['"Julius Sans One"'],
        'sans': ["Lato"],
        'google': ["Poppins"]
      },
      colors: {
        'blackish': '#010409',
        'rich-black': '#1E1E1E',
        'rich-hover-light': '#313131',
        'rich-hover-dark': '#272727',
        'xanthous': '#EAB308',
        'fire-engine': '#CC1923',
        'aero': '#58C0E4',
        'aero-dark': '#3D9ABA',
        'cadet-grey': '#A3A9B2',
        'cadet-grey-dark': '#85888C',
        'platinum': '#DFE3E7',
        'google': '#4397f7'
      }
    },
  },
  plugins: [],
}

