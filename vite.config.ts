/// <reference types="vitest" />
import { resolve } from "path";
import { defineConfig } from "vite";
import dts from 'vite-plugin-dts';

export default defineConfig({
  base: "./",
  build: {
    copyPublicDir: true,
    lib: {
      entry: [
        resolve(__dirname, 'src/plugin/index.ts'),
        resolve(__dirname, 'src/lib/index.ts')
      ],
      formats: ['es'],
    },
    rollupOptions: {
      output: {
        preserveModules: true,
      }
    }
  },
  plugins: [dts()],
  test: {
    globals: true
  }
});
