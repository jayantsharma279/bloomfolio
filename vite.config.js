import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: "/bloomfolio/", // replace bloomfolio with your repo name
  plugins: [react()],
})

