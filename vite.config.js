import { resolve } from "node:path";
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        train: resolve(__dirname, "train.html"),
        kols: resolve(__dirname, "kols.html"),
        exchanges: resolve(__dirname, "exchanges.html"),
        join: resolve(__dirname, "join.html"),
      },
    },
  },
});
