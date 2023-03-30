import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      external: [
        "react-icons/Bi",
        "react-icons/Fi",
        "react-icons/ai",
        "react-icons/bs",
      ],
    },
  },
});
