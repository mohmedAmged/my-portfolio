import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { imagetools } from 'vite-imagetools'
import { visualizer } from 'rollup-plugin-visualizer';
import viteCompression from 'vite-plugin-compression';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    imagetools(),
    visualizer({ open: false, filename: 'dist/stats.html' }),
    viteCompression({ algorithm: 'brotliCompress', ext: '.br' }),
  ],
    build: {
    target: 'es2020',
    minify: 'terser',
    cssCodeSplit: true,
    sourcemap: false,
    brotliSize: true,
    rollupOptions: {
      output: {
        // Manual chunks — split heavy libs so they cache separately
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('react') || id.includes('react-dom')) return 'vendor-react';
            if (id.includes('three') || id.includes('@react-three')) return 'vendor-three';
            if (id.includes('framer-motion')) return 'vendor-framer';
            if (id.includes('maath')) return 'vendor-maath';
            if (id.includes('react-vertical-timeline-component')) return 'vendor-timeline';
            return 'vendor';
          }
        },
      },
    },
  },
  server: {
    fs: { strict: false }
  }
})
