import { defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'node:url'
import { quasar, transformAssetUrls } from '@quasar/vite-plugin'

const buildSourceDir = './src'
const buildSourcesPath = fileURLToPath(new URL(buildSourceDir, import.meta.url))

export default defineConfig(() => {
  return {
    plugins: [
      vue({
        template: { transformAssetUrls }
      }),
      quasar()
    ],
    resolve: {
      alias: {
        '@': buildSourcesPath
      }
    }
  }
})
