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
    <footer class="footer">footer</footer>
  </div>
</template>

<style lang="scss">
.main {
  display: flex;
}
</style>
