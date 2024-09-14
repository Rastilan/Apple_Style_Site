import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { sentryVitePlugin } from "@sentry/vite-plugin";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), sentryVitePlugin({
    authToken: process.env.SENTRY_AUTH_TOKEN,
    org: "chris-hall",
    project: "javascript-react",
  }), 
],

  build: {
    sourcemap: true
  }
})