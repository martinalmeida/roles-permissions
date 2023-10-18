import { fileURLToPath } from "url";
import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/css/app.css', 'resources/js/app.js'],
            refresh: true,
        }),
        vue()
    ],
    resolve: {
        alias: {
            "@": fileURLToPath(new URL("./resources/js", import.meta.url)),
            "@a": fileURLToPath(new URL("./resources/js/modules/auth", import.meta.url)),
            "@m": fileURLToPath(new URL("./resources/js/modules/home", import.meta.url)),
            "@s": fileURLToPath(new URL("./resources/js/modules/shared", import.meta.url)),
        },
    },
});
