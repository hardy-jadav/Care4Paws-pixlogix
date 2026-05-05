import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  root: './',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
    rollupOptions: {
      checks: {
        pluginTimings: false
      },
      output: {
        manualChunks: undefined
      }
    }
  },
  server: {
    port: 5173,
    open: true,
    hmr: {
      host: 'localhost',
      port: 5173
    }
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, './src')
    }
  },
  publicDir: 'public'
})