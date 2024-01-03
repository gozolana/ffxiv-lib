/// <reference types="vitest" />
import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  base: "./",
  build: {
    lib: {
      entry:  [
        resolve(__dirname, 'src/index.ts'),
        resolve(__dirname, 'src/client.ts')
      ],
      name: 'FfxivLib',
      fileName: (_, entryName) => {
        return `${entryName}.js`;
      }
    },
    rollupOptions: {
      output: {
        preserveModules: true,
        exports: 'named'
      }
    }
  },
  test: {
    globals: true
  }
});
