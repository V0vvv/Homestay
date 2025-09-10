import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'node:path'


export default defineConfig(() => {
  return {
    // 👇 IMPORTANT: use your repo name here
    base: '/Homestay/',

    build: {
      // gh-pages expects "dist", so let’s use that
      outDir: 'dist',
    },
    
    esbuild: {
      loader: 'jsx',
      include: /src\/.*\.jsx?$/,
      exclude: [],
    },
    //Sets up backend API proxying.
    optimizeDeps: { 
      force: true,
      esbuildOptions: {
        loader: {
          '.js': 'jsx',
        },
      },
    },
    // configurate component file
    plugins: [react()],
    resolve: {
      alias: [
        {
          find: 'src/',
          replacement: `${path.resolve(__dirname, 'src')}/`,
        },
      ],
      extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.scss'],
    },
    server: {
      port: 5173,
      proxy: {
        // https://vitejs.dev/config/server-options.html
      },
    },
  }
})
