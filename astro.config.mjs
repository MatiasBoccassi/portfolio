// @ts-check
import { defineConfig } from "astro/config";
import tailwind from "@tailwindcss/vite";

export default defineConfig({
  site: "https://matiasboccassi.dev",
  vite: {
    plugins: [tailwind()],
  },
});
