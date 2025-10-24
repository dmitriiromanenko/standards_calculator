import react from "@vitejs/plugin-react"
import path from "path"
import tailwindcss from "tailwindcss"
import { defineConfig } from "vite"

export default defineConfig({
  plugins: [react()],
  base: `/standards_calculator`,
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  css: {
    postcss: {
      plugins: [tailwindcss()],
    },
  },
  server: {
    port: 5173,
  },
})
