import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";

const resolveAlias = Object.fromEntries(
    Object.entries({
        "@components": "./src/components",
        "@pages": "./src/pages",
        "@router": "./src/router",
        "@stores": "./src/stores",
        "@utils": "./src/utils",
        //   '@composable': './src/composable',
        //   '@cstore': './src/composable/store',
        //   '@directive': './src/directive',
        //   '@api': './src/api',
        //   '@plugins': './src/plugins',
        //   '@postcss': './src/assets/postcss',
    }).map(([key, value]) => [key, path.resolve(__dirname, value)])
);

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
    return {
        plugins: [vue()],
        envPrefix: "VUE_",
        envDir: path.join(__dirname, "./env"),
        resolve: {
            alias: resolveAlias,
        },
    };
});
