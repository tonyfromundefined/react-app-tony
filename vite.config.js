import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import checker from "vite-plugin-checker";

export default defineConfig({
  plugins: [
    react(),
    vanillaExtractPlugin(),
    checker({
      typescript: true,
    }),
  ],
});
