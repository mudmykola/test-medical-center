import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../views/home/HomePage.vue';
import HeaderAuthForm from '@/components/header/HeaderAuthForm.vue';
import ClientsPage from '@/views/clients/ClientsPage.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage,
      meta: { title: 'Головна' },
    },
    {
      path: '/login',
      name: 'login',
      component: HeaderAuthForm,
      meta: { title: 'Авторизація' },
    },
    {
      path: '/clients',
      name: 'clients',
      component: ClientsPage,
      meta: { title: 'Клієнти' },
    },
  ],
});
export default router;
