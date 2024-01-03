/// <reference types="vitest" />
import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  base: "./",
  build: {
    lib: {
      entry: {
        plugin: resolve(__dirname, 'src/plugin/index.ts'),
        lib: resolve(__dirname, 'src/lib/index.ts')
      },
      formats: ['es'],
      fileName: '[name]/index'
    },
    rollupOptions: {
      output: {
        preserveModules: true,
        dir: '.'
      }
    }
  },
  test: {
    globals: true
  }
});
