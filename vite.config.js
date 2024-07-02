import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  base: process.env.GITHUB_PAGES  // この行を追加
  ? "reactailwind"            // この行を追加
  : "./",                     // この行を追加
  plugins: [react()],
})
