import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  base: '/NTU-ArtFest-29th-Easter-Egg/',  // 👈 這是你 GitHub Page 上的 repo 路徑
  plugins: [vue()]
})
