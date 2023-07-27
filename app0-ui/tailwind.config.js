
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      display: ['group-hover'],
      backgroundImage :{
        "main-login": "url('https://mfe-stg.mziq.com/mf-auth/d02d2106ed809b205a2e856527302463.jpg') "
      }
    },
  },
  plugins: [],
}

