import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Planning to use tailwind for styling at some point
//import tailwindcss from '@tailwindcss/vite'


// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    //tailwindcss(),
  ],
  base: "/timi-cv"
})
