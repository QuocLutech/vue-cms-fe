<script setup>
import HeaderView from './HeaderView.vue';


</script>

<template>
  <div class="app-layout">

    <HeaderView />

    <main class="main-content">
      <RouterView />
    </main>

  </div>
  
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
