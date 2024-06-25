import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      external: /^@fullcalendar\/(react|daygrid|timegrid|interaction|core)/,
    },
  },
});
