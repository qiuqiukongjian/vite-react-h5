/*
 * @Description: 
 * @Author: sunfanghui
 * @Date: 2024-11-19 21:24:56
 * @LastEditors: sunfanghui
 * @LastEditTime: 2024-11-19 21:29:51
 */
import react from '@vitejs/plugin-react'
import autoprefixer from 'autoprefixer'
import tailwindcss from 'tailwindcss'
import { defineConfig } from 'vite'
// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    postcss: {
      plugins: [
        tailwindcss, 
        autoprefixer,
      ]
    }
  }
})
