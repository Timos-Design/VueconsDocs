import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);
export const suffix = ' | Vuecons';

const router = new VueRouter({
  scrollBehavior(_t, _f, savePosition) {
    return savePosition || { x: 0, y: 0 };
  },

  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/Home.vue'),
      meta: {
        title: 'Home',
      },
    },
    {
      path: '/library',
      name: 'library',
      component: () => import('@/views/Library.vue'),
      meta: {
        title: 'Library',
      },
    },
    {
      path: '/library/:icon',
      name: 'icon',
      component: () => import('@/views/Icon.vue'),
      meta: {
        title: 'Icon',
      },
    },
    {
      path: '/guide',
      name: 'guide',
      component: () => import('@/views/Guide.vue'),
      meta: {
        title: 'Guide',
      },
    },
    { path: '*', redirect: { name: 'home' } },
  ],
});

export default router;
