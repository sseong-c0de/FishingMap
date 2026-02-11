import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
export default defineConfig({
  base:
    process.env.VITE_BASE ??
    (process.env.NODE_ENV === "production" ? "/FishingMap/" : "/"),
  plugins: [react()],
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
