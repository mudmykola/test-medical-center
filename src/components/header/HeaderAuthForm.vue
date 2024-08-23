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
.auth-form {
  display: flex;
  flex-direction: column;
  max-width: 300px;
  margin: auto;
  padding: 1rem;
  background-color: var(--site-background-color);
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  h3 {
    margin-bottom: 1rem;
    font-size: var(--title-size);
    color: var(--base-text-color);
  }

  label {
    margin-top: 0.5rem;
    font-size: var(--text-size);
    color: var(--base-text-color);
  }

  input {
    margin-bottom: 1rem;
    padding: 0.5rem;
    font-size: var(--text-size);
    border: 1px solid #dcdcdc;
    border-radius: 4px;
    width: 100%;
    color: var(--base-text-color);

    &:focus {
      border-color: var(--active-color);
      outline: none;
    }
  }

  .password-hint {
    font-size: var(--text-small-size);
    color: var(--link-color);
    margin-bottom: 1rem;
  }

  button {
    padding: 0.5rem;
    font-size: var(--text-size);
    background-color: var(--active-color);
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
      background-color: (var(--active-color));
    }
  }
}
</style>
