import { defineConfig } from 'vite'
import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'
import { resolve } from 'path'

// https://vite.dev/config/
export default defineConfig({
  base: "./",
  plugins: [
    react(),
    babel({ presets: [reactCompilerPreset()] })
  ],

   build: {
    outDir: resolve(__dirname, "../sky_z/app/react"),
    emptyOutDir: true,
    chunkSizeWarningLimit: 800,
  }
})
