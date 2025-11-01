// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'
// import viteImagemin from 'vite-plugin-imagemin'

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react(),

//       viteImagemin({
//       gifsicle: { optimizationLevel: 7 },
//       optipng: { optimizationLevel: 7 },
//       mozjpeg: { quality: 75 },
//       pngquant: { quality: [0.65, 0.8] },
//       svgo: {
//         plugins: [{ name: 'removeViewBox' }, { name: 'removeEmptyAttrs', active: false }],
//       },
//     }),



//   ],
// })





import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import viteImagemin from 'vite-plugin-imagemin'


export default defineConfig({
  plugins: [
    react(),
    viteImagemin({
      webp: { quality: 85, lossless: false, nearLossless: 90, smartSubsample: true, effort: 6 },
      mozjpeg: { quality: 85, progressive: true },
      pngquant: { quality: [0.8, 0.9], strip: true },
      verbose: true,
    }),
  ],
  build: {
    assetsInlineLimit: 0,
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          if (/\.(png|jpe?g|gif|webp)$/i.test(assetInfo.name)) {
            return `assets/img/[name]-[hash][extname]`
          }
          return `assets/[name]-[hash][extname]`
        },
      },
    },
  },

})