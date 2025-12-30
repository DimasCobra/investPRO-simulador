import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // 'base' como './' permite que o projeto seja aberto até clicando no index.html da pasta dist
  base: './', 
  server: {
    port: 5173,
    open: true,
    // Garante que o HMR (Hot Module Replacement) funcione bem localmente
    strictPort: true,
  },
  resolve: {
    alias: {
      // Uso de alias relativo para máxima compatibilidade local
      '@': './'
    }
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true
      }
    },
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'recharts', 'lucide-react'],
        },
      },
    },
  }
});