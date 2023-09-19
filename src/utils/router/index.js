const pages = import.meta.glob(`@pages/**/*.vue`);

const componentRoute = ({ path, name, component, ...config }) => ({
    path,
    name,
    component: pages[`/src/pages/${component}.vue`],
    meta: {},
    ...config,
});

export function componentRoutes(routes) {
    return routes.map(componentRoute).map((route) => {
        if (route.children) {
            return {
                ...route,
                children: componentRoutes(route.children),
            };
        }
        return route;
    });
}
