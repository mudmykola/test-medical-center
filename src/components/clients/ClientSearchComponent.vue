<script setup>
import { ref, watch } from 'vue';
import { useSearchStore } from '@/stores/searchStore';
import SearchIcon from '@/components/icons/SearchIcon.vue';

const searchStore = useSearchStore();

const searchQuery = ref(searchStore.searchQuery);

watch(searchQuery, (newQuery) => {
  searchStore.setSearchQuery(newQuery);
});

const staticTexts = {
  searchPlaceholder: 'Пошук',
};
</script>

<template>
  <div class="clients-function__search">
    <div class="search-icon">
      <SearchIcon />
    </div>
    <input
      type="text"
      v-model="searchQuery"
      :placeholder="staticTexts.searchPlaceholder"
      class="search-input"
    />
  </div>
</template>

<style scoped lang="scss">
@import 'clients-style';
</style>
