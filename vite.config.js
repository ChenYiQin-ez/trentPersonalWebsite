import { fileURLToPath, URL } from 'node:url'

import {build, defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import { VitePWA }  from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    VitePWA({
      registerType: 'autoUpdate',
      injectRegister: 'auto',
      devOptions: {
        enabled: true
      },
      manifest: {
        name: 'My PWA',
        short_name: 'PWA',
        description: 'A progressive web app example',
        start_url: '/',
        display: 'standalone',
        background_color: '#ffffff',
        theme_color: '#0078d4',
        icons: [
          {
            src: 'src/assets/logo.svg',
            sizes: '192x192',
            type: 'image/svg',
          },
        ],
      },
      workbox: {
        // Enable this to allow the service worker to skip the waiting phase and take control immediately
        skipWaiting: true,
        cleanupOutdatedCaches: true
      },

    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
