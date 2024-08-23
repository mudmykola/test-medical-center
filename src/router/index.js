import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../views/home/HomePage.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage,
      meta: { title: 'Home' },
    },
  ],
});
export default router;
