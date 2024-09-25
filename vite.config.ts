import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import reactRouterPlugin from 'vite-plugin-next-react-router';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(), 
    reactRouterPlugin({
      pageDir: 'src/pages',
      extensions: ['js', 'jsx', 'ts', 'tsx'],
      // like '_app' in Next.js, `_document` is not supported since all rendering is done in client side
      layout: '_layout',
    }),
  ],
});
