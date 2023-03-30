import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      external: [
        "/node_modules/react-icons/Bi",
        "/node_modules/react-icons/Fi",
        "/node_modules/react-icons/ai",
        "/node_modules/react-icons/bs",
      ],
    },
  },
});
