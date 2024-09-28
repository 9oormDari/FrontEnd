import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import withReactRouter from 'vite-plugin-next-react-router';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react(),
        withReactRouter({
            pageDir: 'src/pages',
            extensions: ['js', 'jsx', 'ts', 'tsx'],
            layout: '_layout',
        }),
    ],
    server: {
        port: 3000,
        host: true,
        strictPort: false,
    },
});
