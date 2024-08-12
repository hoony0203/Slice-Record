import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
// import path from "path";
// import { fileURLToPath } from "url";
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// https://vitejs.dev/config/
export default defineConfig({
  base: "/Slice-Record/",
  plugins: [react()],
  // resolve: {
  //   alias: [
  //     { find: "@", replacement: path.resolve(__dirname, "src/assets/img") },
  //     {
  //       find: "@components",
  //       replacement: path.resolve(__dirname, "/Slice-Record/img/"),
  //     },
  //   ],
  // },
});
