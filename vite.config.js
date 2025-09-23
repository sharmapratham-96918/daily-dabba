import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'


export default defineConfig({
  plugins: [react() , tailwindcss()],
  server :{
    proxy :{
      "/api" : {
        target : "https://daily-dabba-3zuv.onrender.com",
        changeOrigin : true,
        secure : false
      }
    }
  }
})
