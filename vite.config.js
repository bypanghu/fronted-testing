import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path';
import { viteMockServe } from 'vite-plugin-mock';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(),viteMockServe({
    mockPath : 'mock',
    watchFiles:true
  })],
  resolve: {
    alias: {
      '@': resolve('./src'),
    }
  },
  server: {
    host: '0.0.0.0'
  }
})
