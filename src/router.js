import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/about',
            name: 'about',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
        },
        {
            path: '/shop',
            name: 'ShopIndex',
            component: () => import('./views/Shop/index.vue')
        },
        {
            path: '/shop/:id',
            name: 'Shop',
            component: () => import('./views/Shop/shop.vue')
        },
        {
            path: '/forum',
            name: 'Forum',
            component: () => import('./views/Forum/ForumHome.vue')
        },
        {
            path: '/new',
            name: 'New',
            component: () => import('./views/Post/PostIndex.vue')
        }
    ],
    scrollBehavior(to, from, savedPosition) {
        return { x: 0, y: 0 };
    }
});
