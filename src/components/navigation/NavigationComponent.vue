<script setup>
import { useRouter, useRoute } from 'vue-router';
import { useUserStore } from '@/stores/userStore';
import { computed, ref } from 'vue';
import ScannerIcon from '@/components/icons/ScannerIcon.vue';
import EmployeesIcon from '@/components/icons/EmployeesIcon.vue';
import ClientsIcon from '@/components/icons/ClientsIcon.vue';
import ExercisesIcon from '@/components/icons/ExercisesIcon.vue';
import BannersIcon from '@/components/icons/BannersIcon.vue';
import LogoutIcon from '@/components/icons/LogoutIcon.vue';

const btnLogout = ref('Вийти');
const router = useRouter();
const route = useRoute();
const userStore = useUserStore();

const menuItems = [
  { icon: ScannerIcon, text: 'Сканер', route: '/scanner' },
  { icon: EmployeesIcon, text: 'Співробітники', route: '/employees' },
  { icon: ClientsIcon, text: 'Клієнти', route: '/clients' },
  {
    icon: ExercisesIcon,
    text: 'Вправи',
    subtext: 'Категорії',
    route: '/exercises',
  },
  { icon: BannersIcon, text: 'Банери', route: '/banners' },
];

const handleLogout = () => {
  userStore.clearUser();
  router.push('/');
};
const isLoggedIn = computed(() => !!userStore.username);
</script>

<template>
  <div class="navigation">
    <ul class="menu-list">
      <li
        v-for="(item, index) in menuItems"
        :key="index"
        :class="['menu-item', { active: route.path === item.route }]"
        @click="() => router.push(item.route)"
      >
        <component :is="item.icon" class="menu-icon" />
        <div class="menu-text-wrapper">
          <span class="menu-text">{{ item.text }}</span>
          <span v-if="item.subtext" class="menu-subtext">{{
            item.subtext
          }}</span>
        </div>
      </li>
    </ul>
    <div v-if="isLoggedIn" class="logout-section" @click="handleLogout">
      <LogoutIcon class="menu-icon" />
      <span class="menu-text menu-text__logout">{{ btnLogout }}</span>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import 'navigation-style';
</style>
