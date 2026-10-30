<script setup>
import HeaderView from './HeaderView.vue';
import { useAuthStore } from './store/auth.js';
const authStore = useAuthStore()

</script>

<template>
  <HeaderView v-if="authStore.isLoggedIn" />
  <main class="main-content">
    <RouterView />
  </main>
</template>

<style scoped>

</style>
