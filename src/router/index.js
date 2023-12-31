import { createRouter, createWebHistory } from "vue-router";

import routes from "./routes";

const router = createRouter({
    history: createWebHistory(),
    scrollBehavior(to, from, savedPosition) {
        return { left: 0, top: 0 };
    },
    routes,
});

export default router;
