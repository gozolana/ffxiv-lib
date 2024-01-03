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
      formats: ['es', 'cjs'],
      name: 'FfxivLib',
      fileName: (format, entryName) => {
        const extension = format === 'es' ? 'js' : 'cjs';
        return `${entryName}.${extension}`;
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
