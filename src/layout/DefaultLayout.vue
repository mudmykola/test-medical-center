<script setup>
import NavigationComponent from '@/components/navigation/NavigationComponent.vue';
import HeaderComponent from '../components/header/HeaderComponent.vue';
</script>

<template>
  <div class="default-layout">
    <header class="header">
      <HeaderComponent />
    </header>
    <main class="main">
      <aside class="main-aside">
        <NavigationComponent />
      </aside>
      <div class="main-content">
        <slot />
      </div>
    </main>
  </div>
</template>

<style scoped lang="scss">
@import 'default-layout.scss';
</style>
