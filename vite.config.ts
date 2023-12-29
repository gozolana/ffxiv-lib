/// <reference types="vitest" />
import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  base: "./",
  build: {
    lib: {
      entry:  resolve(__dirname, 'src/index.ts'),
      name: 'FfxivLib',
      fileName: 'ffxiv-lib',
      formats: ['es', 'umd'],
    },
  },
  test: {
    globals: true
  }
});
