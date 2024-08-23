import { defineStore } from 'pinia';
import { ref, onMounted } from 'vue';

export const useUserStore = defineStore('user', () => {
  const username = ref('');
  const avatarUrl = ref('');

  const loadUser = () => {
    const savedUsername = localStorage.getItem('userName');
    const savedAvatarUrl = localStorage.getItem('userPhoto');

    if (savedUsername && savedAvatarUrl) {
      username.value = savedUsername;
      avatarUrl.value = savedAvatarUrl;
    }
  };

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

  onMounted(loadUser);

  return { username, avatarUrl, setUser, clearUser };
});
