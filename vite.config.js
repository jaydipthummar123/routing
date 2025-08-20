import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react({
      jsxRuntime: 'automatic',
      include: /\.(js|jsx)$/, // allow JSX in .js files too
    }),
    tailwindcss(),
  ],
})
