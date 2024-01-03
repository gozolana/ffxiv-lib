/// <reference types="vitest" />
import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  base: "./",
  build: {
    copyPublicDir: true,
    lib: {
      entry: {
        plugin: resolve(__dirname, 'src/plugin/index.ts'),
        lib: resolve(__dirname, 'src/lib/index.ts')
      },
      formats: ['es'],
    },
    rollupOptions: {
      output: {
        preserveModules: true,
      }
    }
  },
  test: {
    globals: true
  }
});
