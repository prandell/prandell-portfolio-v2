import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import * as glslify from 'vite-plugin-glslify'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), glslify.glslify()]
})
