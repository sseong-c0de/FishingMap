import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

const base =
  process.env.VITE_BASE ??
  (process.env.NODE_ENV === "production" ? "/FishingMap/" : "/");

export default defineConfig({
  base,
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      base,
      manifest: {
        name: "FishingMap",
        short_name: "FishingMap",
        theme_color: "#2b2b2b",
        icons: [
          {
            src: "./logo.png",
            sizes: "192x192",
            type: "image/png",
          },
        ],
      },
    }),
    ],
  
  server: {
    proxy: {
      "/data-go": {
        target: "https://apis.data.go.kr",
        changeOrigin: true,
        secure: true,
        rewrite: (path) => path.replace(/^\/data-go/, ""),
      },
    },
  },
});
