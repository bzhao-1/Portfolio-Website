import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ command }) => ({
  plugins: [react()],
  base: command === "serve" ? "/" : "/Portfolio-Website/",
  build: {
    target: "es2020",
    cssCodeSplit: false,
    assetsInlineLimit: 0,
  },
}));
