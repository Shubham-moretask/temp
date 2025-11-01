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
import { webp } from 'vite-plugin-webp'

// Replace with your ngrok domain (no https://)

export default defineConfig({
  plugins: [
    react(),
    webp({
      // Convert PNG and JPG to WebP
      convertTargets: [
        {
          from: /\.(png|jpg|jpeg)$/,
          to: 'webp',
          quality: 60
        }
      ]
    }),
    viteImagemin({
      gifsicle: { 
        optimizationLevel: 7,
        interlaced: false 
      },
      optipng: { 
        optimizationLevel: 7 
      },
      mozjpeg: { 
        quality: 60,  // Reduced from 75 to 60 for better compression
        progressive: true 
      },
      pngquant: { 
        quality: [0.45, 0.65],  // More aggressive compression
        speed: 4 
      },
      svgo: {
        plugins: [
          { name: 'removeViewBox' },
          { name: 'removeEmptyAttrs', active: false },
          { name: 'removeUselessDefs' },
          { name: 'cleanupNumericValues' },
          { name: 'collapseGroups' },
          { name: 'mergePaths' },
        ],
      },
      // Add webp conversion for better compression
      webp: {
        quality: 60,
      },
    }),
  ],
  build: {
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          const info = assetInfo.name.split('.');
          const ext = info[info.length - 1];
          if (/\.(png|jpe?g|svg|gif|tiff|bmp|ico)$/i.test(assetInfo.name)) {
            return `assets/images/[name]-[hash][extname]`;
          }
          return `assets/[name]-[hash][extname]`;
        },
      },
    },
  },


})