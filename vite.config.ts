import react from "@vitejs/plugin-react"
import tailwindcss from "tailwindcss"
import { defineConfig } from "vite"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/standards_calculator/",
  css: {
    postcss: {
      plugins: [tailwindcss()],
    },
  },
})
