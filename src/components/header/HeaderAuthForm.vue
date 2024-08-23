<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useUserStore } from '@/stores/userStore';

const username = ref('');
const password = ref('');
const router = useRouter();
const userStore = useUserStore();

const loginTitle = 'Ввійти';
const usernameLabel = "Ім'я:";
const passwordLabel = 'Пароль:';
const passwordHint = 'Пароль: ';
const passwordHintValue = 'admin';
const submitButtonText = 'Увійти';
const invalidPasswordAlert = 'Невірний пароль';

const handleLogin = () => {
  if (password.value === passwordHintValue) {
    const avatarUrl = `https://api.multiavatar.com/${encodeURIComponent(username.value)}.png`;
    userStore.setUser(username.value, avatarUrl);
    router.push('/');
  } else {
    alert(invalidPasswordAlert);
  }
};
</script>

<template>
  <div class="auth-form">
    <h3>{{ loginTitle }}</h3>
    <form @submit.prevent="handleLogin">
      <label for="username">{{ usernameLabel }}</label>
      <input
        v-model="username"
        id="username"
        type="text"
        placeholder="Введіть ім'я"
        required
      />

      <label for="password">{{ passwordLabel }}</label>
      <input
        v-model="password"
        id="password"
        type="password"
        placeholder="Введіть пароль"
        required
      />
      <p class="password-hint">
        {{ passwordHint }}<strong>{{ passwordHintValue }}</strong>
      </p>

      <button type="submit">{{ submitButtonText }}</button>
    </form>
  </div>
</template>

<style scoped lang="scss">
@import 'header-auth-style';
</style>
