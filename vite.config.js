import { defineConfig } from 'vite';
import dotenv from 'dotenv';

dotenv.config(); // load env vars from .env

export default defineConfig({
  define: {
    __id__: `"${process.env.ID}"`,
  },
  base: "/testing-vite-deploy",
});
