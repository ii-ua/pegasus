import { defineConfig } from 'vite'
import { tanstackStart } from '@tanstack/react-start/plugin/vite'
import viteReact from '@vitejs/plugin-react'
import viteTsConfigPaths from 'vite-tsconfig-paths'
import tailwindcss from '@tailwindcss/vite'
import svgr from 'vite-plugin-svgr'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer'

const config = defineConfig({
  server: {
    host: true,
  },
  plugins: [
    ViteImageOptimizer({
      logStats: true,
      gif: { loop: 0 },
      png: {
        compressionLevel: 8,
        adaptiveFiltering: true,
        quality: 95,
        effort: 8,
        palette: true,
        colours: 128,
        dither: 0.7,
      },
      jpeg: {
        quality: 90, // Дуже хороша якість без візуальних артефактів
        progressive: true, // Прогресивне завантаження (швидше малюється картинка)
        chromaSubsampling: '4:4:4', // Без втрати кольорів (особливо важливо для графіки й тексту)
        trellisQuantisation: true, // Мінімізує шуми, кращий баланс розмір/якість
        overshootDeringing: true, // Прибирає кільцеві артефакти на контрастних переходах
        optimiseScans: true, // Краще організовані прогресивні скани
        optimiseCoding: true, // Оптимізація ентропії (зменшує вагу без втрат)
        quantisationTable: 3, // Хороша компресія для реальних фото (0 — найкраща якість, 3 — майже така сама, але менший розмір)
        mozjpeg: true,
      },
      jpg: {
        quality: 90, // Дуже хороша якість без візуальних артефактів
        progressive: true, // Прогресивне завантаження (швидше малюється картинка)
        chromaSubsampling: '4:4:4', // Без втрати кольорів (особливо важливо для графіки й тексту)
        trellisQuantisation: true, // Мінімізує шуми, кращий баланс розмір/якість
        overshootDeringing: true, // Прибирає кільцеві артефакти на контрастних переходах
        optimiseScans: true, // Краще організовані прогресивні скани
        optimiseCoding: true, // Оптимізація ентропії (зменшує вагу без втрат)
        quantisationTable: 2, // Хороша компресія для реальних фото (0 — найкраща якість, 3 — майже така сама, але менший розмір)
        mozjpeg: true,
      },
    }),
    // this is the plugin that enables path aliases
    tanstackStart({
      spa: {
        enabled: false,
      },
      prerender: {
        enabled: true,
        crawlLinks: true,
      },
      sitemap: {
        host: 'https://pegasusarms.com.ua',
      },
    }),
    viteTsConfigPaths({
      projects: ['./tsconfig.json'],
    }),
    tailwindcss(),

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
  build: {
    cssCodeSplit: true,
    sourcemap: true,
    // rollupOptions: {
    //   output: {
    //     manualChunks(id) {
    //       if (id.includes('node_modules')) {
    //         return id
    //           .toString()
    //           .split('node_modules/')[1]
    //           .split('/')[0]
    //           .toString()
    //       }
    //     },
    //   },
    // },
  },
})

export default config
