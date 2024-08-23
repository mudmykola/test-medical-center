<script setup>
import { useUserStore } from '@/stores/userStore';
import { useRouter } from 'vue-router';
import IconLogo from '@/components/icons/IconLogo.vue';

const userStore = useUserStore();
const router = useRouter();

const greetingText = 'Привіт, ';
const loginPromptText = 'Для доступу, будь ласка, ';
const loginLinkText = 'увійдіть';

const handleLoginRedirect = () => {
  router.push('/login');
};
</script>

<template>
  <div class="header-inner">
    <div class="header-inner__logo">
      <router-link to="/"> <IconLogo /> </router-link>
    </div>
    <div class="header-inner__auth">
      <h2 v-if="userStore.username">
        <span>{{ greetingText }}</span
        >{{ userStore.username }}
      </h2>
      <img
        v-if="userStore.avatarUrl"
        :src="userStore.avatarUrl"
        alt="User Avatar"
      />
      <p v-else>
        {{ loginPromptText
        }}<router-link to="/login" @click.native="handleLoginRedirect">{{
          loginLinkText
        }}</router-link
        >.
      </p>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import 'header-style';
</style>
