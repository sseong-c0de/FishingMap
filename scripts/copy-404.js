import { copyFileSync, existsSync } from "fs";
import { join } from "path";

const dist = "dist";
const indexPath = join(dist, "index.html");
const notFoundPath = join(dist, "404.html");

if (existsSync(indexPath)) {
  copyFileSync(indexPath, notFoundPath);
  console.log("Created 404.html for GitHub Pages SPA routing.");
} else {
  console.warn("dist/index.html not found. Run 'npm run build' first.");
}
