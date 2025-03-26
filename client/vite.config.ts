import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dotenv from 'dotenv'

// Charger les variables d'environnement
dotenv.config()

export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    port: parseInt(process.env.VITE_PORT_URL || '4500'),
  },
})
