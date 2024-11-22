/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui"
export default {
  content: [
    "./index.html",
      "./src/**/*.{js,jsx,ts,tsx}",
    
  ],
  theme: {
    extend: {
      backgroundImage: {
        'photofunky': "url('public/images/w/hz.webp')",
        
        'nuage':"url"('public/images/w/enver.png')
      }
    },
  },
  plugins: [
    daisyui
  ],
}

