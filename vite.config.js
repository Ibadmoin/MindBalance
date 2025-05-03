import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import progress from 'vite-plugin-progress'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(),progress()],

})


