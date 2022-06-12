import { defineConfig } from 'vite'
import { viteCommonjs } from '@originjs/vite-plugin-commonjs'

import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), viteCommonjs()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '/src')
    }
  }
})
