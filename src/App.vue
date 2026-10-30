<script setup>
import HeaderView from './HeaderView.vue';
import { useRoute } from 'vue-router';

const route = useRoute();

</script>

<template>
  <HeaderView v-if="route.path !== '/login'" />
  <main class="main-content">
    <RouterView />
  </main>
</template>

<style scoped>

</style>
