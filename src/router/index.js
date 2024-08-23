import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../views/home/HomePage.vue';
import HeaderAuthForm from '@/components/header/HeaderAuthForm.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage,
      meta: { title: 'Home' },
    },
    {
      path: '/login',
      name: 'login',
      component: HeaderAuthForm,
      meta: { title: 'Login' },
    },
  ],
});
export default router;
