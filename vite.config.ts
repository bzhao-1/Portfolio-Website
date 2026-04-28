import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(() => ({
  plugins: [react()],
  base: process.env.DEPLOY_TARGET === "github-pages" ? "/Portfolio-Website/" : "/",
  build: {
    target: "es2020",
    cssCodeSplit: false,
    assetsInlineLimit: 0,
  },
}));
