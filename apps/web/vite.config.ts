import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import macrosPlugin from 'vite-plugin-babel-macros';
import svgr from 'vite-plugin-svgr';
import * as path from 'path';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    
    react({
      include: ['**/*.tsx', '**/*.ts'],
      // jsxRuntime: 'automatic',
    }),
    macrosPlugin(),
    svgr({
      svgrOptions: {
        // svgr options
      },
    }),
  ],
  server: {
    watch: {
      // usePolling: true,
    },
    hmr: { overlay: false },
    port: 1111,
    host: true, // Here
    // strictPort: true,
  },
  resolve: {
    alias: {
      '@assets': path.resolve(__dirname, './src/assets'),
      '@utils': path.resolve(__dirname, './src/utils'),
      '@store': path.resolve(__dirname, './src/store'),
      '@modules': path.resolve(__dirname, './src/modules'),
      '@mock': path.resolve(__dirname, './src/mock'),
      '@routes': path.resolve(__dirname, './src/routes'),
      '@atomic': path.resolve(__dirname, './src/atomic'),

      
    },
  },
  base: '.'
});
