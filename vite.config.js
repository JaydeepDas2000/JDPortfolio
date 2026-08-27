import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// On GitHub Pages the site is served from /JDPortfolio/ (the repo name).
// Locally (dev/preview) it stays at / so nothing changes while developing.
export default defineConfig(({ command }) => ({
  base: command === "build" ? "/JDPortfolio/" : "/",
  plugins: [react()],
}));
