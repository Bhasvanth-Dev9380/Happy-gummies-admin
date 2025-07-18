import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: process.env.PORT || 5173,
    host: "0.0.0.0",
    allowedHosts: [
      'all',  // or remove this if you're specifying domains explicitly
      'happy-gummies-admin-panel.onrender.com'
    ]
  }
});
