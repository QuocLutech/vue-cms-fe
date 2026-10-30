<script setup>

</script>

<template>
  <section class="about-page">
    <div class="content">
      <h1>Welcome to MyApp</h1>

      <p>
        MyApp is a simple website built with Vue 3.
      </p>

      <p>
        Use the navigation above to explore the application.
      </p>
    </div>
  </section>
</template>

<style scoped>
.about-page {
  min-height: calc(100vh - 64px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 32px 24px;
  background: linear-gradient(135deg, #f8fafc 0%, #e8eef9 100%);
  box-sizing: border-box;
}

.content {
  max-width: 600px;
  text-align: center;
}

h1 {
  margin: 0 0 20px;
  color: #111827;
  font-size: clamp(28px, 4vw, 42px);
  font-weight: 750;
  letter-spacing: -1px;
}

p {
  margin: 8px 0;
  color: #64748b;
  font-size: 15px;
  line-height: 1.7;
}
</style>
