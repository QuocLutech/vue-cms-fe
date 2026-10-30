<script setup>
import HeaderView from './HeaderView.vue';
import { useRoute } from 'vue-router';
const route = useRoute();
</script>

<template>
  <div v-if="route.path !== '/login'" class="app-layout">
    <HeaderView />

    <main class="main-content">
      <RouterView />
    </main>
  </div>
  <RouterView v-else />
</template>

<style scoped>
.app-layout {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
}
.main-content {
  flex: 1;
  min-width: 0;
}
</style>
