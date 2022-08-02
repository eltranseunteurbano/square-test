import { defineConfig } from 'vite'
import compress from 'vite-plugin-compress'

export default defineConfig({
  plugins: [
    compress()
  ]
})