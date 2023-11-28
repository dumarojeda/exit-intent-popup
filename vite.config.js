import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    outDir: '../assets',
    rollupOptions: {
      output: {
        entryFileNames: `js/[name].js`,
        chunkFileNames: `js/[name].js`,
        assetFileNames: `[ext]/[name].[ext]`,
      },
    },
  },
  plugins: [],
  root: './src',
});
