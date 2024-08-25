import { defineConfig, type PluginOption } from "vite";
import { viteStaticCopy } from "vite-plugin-static-copy";

import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "",
  server: {
    host: true,
    port: 5173,
    watch: {
      usePolling: true
    }
  },
  build: {
    outDir: "./dist",
    sourcemap: true,
    minify: true
  },
  plugins: [
    react({
      include: "**/*.tsx"
    }),
    htmlPlugin(),
    viteStaticCopy({
      targets: [
        {
          src: "./assets/*",
          dest: "./assets/"
        }
      ]
    })
  ]
});

function htmlPlugin(): PluginOption {
  return {
    name: "html-transform",
    transformIndexHtml(html) {
      return html.replace('src="/assets', 'src="assets');
    }
  };
}
