<script setup>
import { useUserStore } from '@/stores/userStore';
import { useRouter } from 'vue-router';
import IconLogo from '@/components/icons/IconLogo.vue';

const userStore = useUserStore();
const router = useRouter();

const greetingText = 'Привіт, ';
const logoutText = 'Вийти';
const loginPromptText = 'Для доступу, будь ласка, ';
const loginLinkText = 'увійдіть';

const handleLogout = () => {
  userStore.clearUser();
  router.push('/');
};
</script>

<template>
  <div class="header-inner">
    <div class="header-inner__logo">
      <router-link to="/"> <IconLogo /> </router-link>
    </div>
    <div class="header-inner__auth">
      <h2 v-if="userStore.username">
        {{ greetingText }}{{ userStore.username }}<span></span>
      </h2>
      <img
        v-if="userStore.avatarUrl"
        :src="userStore.avatarUrl"
        alt="User Avatar"
      />
      <button v-if="userStore.username" @click="handleLogout">
        {{ logoutText }}
      </button>
      <p v-else>
        {{ loginPromptText
        }}<router-link to="/login">{{ loginLinkText }}</router-link
        >.
      </p>
    </div>
  </div>
</template>

<style scoped lang="scss">
.header-inner {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
}

.header-inner__auth {
  display: flex;
  align-items: center;

  h2 {
    margin-right: 1rem;
    font-size: var(--text-size);
    color: var(--base-text-color);
  }

  img {
    border-radius: 50%;
    width: 40px;
    height: 40px;
    margin-right: 1rem;
  }

  button {
    padding: 0.5rem;
    font-size: var(--text-size);
    background-color: var(--active-color);
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
}
</style>
