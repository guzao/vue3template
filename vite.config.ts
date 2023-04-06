import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import WindiCSS from 'vite-plugin-windicss'
import { resolve } from 'path'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: usePlugin(),
  server: useServe(),
  resolve: useResolve()
})


function useServe() {
  return {
    open: true,
    port: 808
  }
}


function usePlugin() {
  return [
    vue(),
    WindiCSS()
  ]
}

function useResolve() {
  return {
    alias: {
      '@': resolve(__dirname, './src'),
    }
  }
}