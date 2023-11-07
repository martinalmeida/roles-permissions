import { fileURLToPath } from "url";
import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import vue from '@vitejs/plugin-vue';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/css/app.css', 'resources/js/app.js'],
            refresh: true,
        }),
        vue(),
        VitePWA({
            registerType: 'autoUpdate', devOptions: {
                enabled: true
            }
        })
    ],
    resolve: {
        alias: {
            "@": fileURLToPath(new URL("./resources/js", import.meta.url)),
            "@a": fileURLToPath(new URL("./resources/js/modules/auth", import.meta.url)),
            "@h": fileURLToPath(new URL("./resources/js/modules/home", import.meta.url)),
            "@sy": fileURLToPath(new URL("./resources/js/modules/system", import.meta.url)),
            "@c": fileURLToPath(new URL("./resources/js/modules/system/submodules/companies", import.meta.url)),
            "@r": fileURLToPath(new URL("./resources/js/modules/system/submodules/roles", import.meta.url)),
            "@u": fileURLToPath(new URL("./resources/js/modules/system/submodules/users", import.meta.url)),
            "@s": fileURLToPath(new URL("./resources/js/modules/shared", import.meta.url)),
        },
    },
});
