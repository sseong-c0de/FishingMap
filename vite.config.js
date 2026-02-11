import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
// GitHub Pages: 저장소 이름이 다르면 base를 "/저장소이름/" 으로 변경
export default defineConfig({
  base: process.env.VITE_BASE ?? (process.env.NODE_ENV === "production" ? "/FishingMap/" : "/"),
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
