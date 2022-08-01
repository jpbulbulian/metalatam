import { defineConfig } from "vite";
import { resolve } from "path";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svgr(), react()],
  resolve: {
    alias: {
      components: resolve(__dirname, "src/components"),
      config: resolve(__dirname, "src/config"),
      icons: resolve(__dirname, "src/icons"),
      layouts: resolve(__dirname, "src/layouts"),
      views: resolve(__dirname, "src/views"),
    },
  },
});
