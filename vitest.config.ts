import { defineConfig } from 'vitest/config'
import { resolve } from 'path'
export default defineConfig({
  resolve: useResolve(),
  test: {
    // ...
    globals: true,
    
  },
})




function useResolve() {
  return {
    alias: {
      '@': resolve(__dirname, './src'),
    }
  }
}