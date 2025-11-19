import { defineConfig } from 'vite'
import { tanstackStart } from '@tanstack/react-start/plugin/vite'
import viteReact from '@vitejs/plugin-react'
import viteTsConfigPaths from 'vite-tsconfig-paths'
import tailwindcss from '@tailwindcss/vite'
import svgr from 'vite-plugin-svgr'
import { nitro } from 'nitro/vite'

const config = defineConfig({
  plugins: [
    // this is the plugin that enables path aliases
    viteTsConfigPaths({
      projects: ['./tsconfig.json'],
    }),
    tailwindcss(),
    nitro(),
    tanstackStart(),
    viteReact(),
    svgr({
      svgrOptions: {
        svgo: true,
        svgoConfig: {
          plugins: [
            {
              name: 'preset-default',
              params: {
                overrides: {
                  removeUnknownsAndDefaults: false,
                  removeUselessDefs: false,
                  cleanupIDs: false,
                  convertShapeToPath: false,
                  removeViewBox: false,
                  // не чіпаємо fill/stroke, залишаємо градієнти
                  removeAttrs: false,
                },
              },
            },
          ],
        },
      },
      include: '**/*.svg?react',
    }),
  ],
})

export default config
