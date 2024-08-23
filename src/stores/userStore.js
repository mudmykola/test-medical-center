import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useUserStore = defineStore('user', () => {
  const username = ref('');
  const avatarUrl = ref('');

  const setUser = (name, photoUrl) => {
    username.value = name;
    avatarUrl.value = photoUrl;
    localStorage.setItem('userName', name);
    localStorage.setItem('userPhoto', photoUrl);
  };

  const clearUser = () => {
    username.value = '';
    avatarUrl.value = '';
    localStorage.removeItem('userName');
    localStorage.removeItem('userPhoto');
  };

  return { username, avatarUrl, setUser, clearUser };
});
