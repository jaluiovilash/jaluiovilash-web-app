import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "dist",
  },
  server: {
    open: true,
    port: 7000,
    allowedHosts: ["28ba2abe2184.ngrok-free.app"],
  },
});
