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
      // Much more aggressive GIF compression
      gifsicle: { 
        optimizationLevel: 7,
        interlaced: false,
        colors: 128  // Reduce color palette
      },
      // More aggressive PNG compression
      optipng: { 
        optimizationLevel: 7,
        bitDepthReduction: true,
        colorTypeReduction: true,
        paletteReduction: true
      },
      // Very aggressive JPEG compression
      mozjpeg: { 
        quality: 40,  // Much lower quality for better compression
        progressive: true,
        arithmetic: false,
        dct: 'float',
        quantTable: 3
      },
      // Very aggressive PNG quantization
      pngquant: { 
        quality: [0.3, 0.5],  // Much more aggressive
        speed: 1,  // Slower but better compression
        strip: true,  // Remove metadata
        dithering: 1,
        posterize: 4
      },
      // Aggressive SVG optimization
      svgo: {
        plugins: [
          { name: 'removeViewBox' },
          { name: 'removeEmptyAttrs' },
          { name: 'removeUselessDefs' },
          { name: 'cleanupNumericValues' },
          { name: 'collapseGroups' },
          { name: 'mergePaths' },
          { name: 'removeUnknownsAndDefaults' },
          { name: 'removeNonInheritableGroupAttrs' },
          { name: 'removeUselessStrokeAndFill' },
          { name: 'removeUnusedNS' },
          { name: 'cleanupIDs' },
          { name: 'cleanupAttrs' },
          { name: 'convertColors' },
          { name: 'convertPathData' },
          { name: 'convertTransform' },
          { name: 'removeEmptyContainers' },
          { name: 'removeDuplicateGradientStops' },
          { name: 'removeTitle' },
          { name: 'removeDesc' }
        ],
      },
      // Add verbose logging to see compression results
      verbose: true,
      // Disable cache for testing
      cache: false
    }),
  ],
  build: {
    // Increase chunk size warning limit for large images
    chunkSizeWarningLimit: 2000,
    // Enable asset inlining threshold
    assetsInlineLimit: 0, // Don't inline any assets, process all through imagemin
    rollupOptions: {
      output: {
        // Better asset file naming
        assetFileNames: (assetInfo) => {
          const info = assetInfo.name.split('.');
          const ext = info[info.length - 1];
          if (/\.(png|jpe?g|svg|gif|tiff|bmp|ico|webp)$/i.test(assetInfo.name)) {
            return `assets/images/[name]-[hash][extname]`;
          }
          if (/\.(woff|woff2|eot|ttf|otf)$/i.test(assetInfo.name)) {
            return `assets/fonts/[name]-[hash][extname]`;
          }
          return `assets/[name]-[hash][extname]`;
        },
        // Split large chunks
        manualChunks: (id) => {
          if (id.includes('node_modules')) {
            return 'vendor';
          }
          if (id.includes('assets')) {
            return 'assets';
          }
        },
      },
    },
  },


}) 