<script setup>

</script>

<template>
        <header class="topbar">
            <div class="logo">MyApp</div>

            <nav class="navigation">
            <RouterLink to="/" class="nav-link">Home</RouterLink>
            <RouterLink to="/about" class="nav-link">About</RouterLink>
            </nav>
        </header>
</template>

<style>
.topbar {
  height: 64px;
  padding: 0 40px;
  display: flex;
  align-items: center;
  background: #ffffff;
  border-bottom: 1px solid #e5e7eb;
  position: relative;
}

.logo {
  font-size: 20px;
  font-weight: 700;
  color: #111827;
}

.navigation {
  display: flex;
  align-items: center;
  gap: 28px;
  height: 100%;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}

.nav-link {
  height: 100%;
  display: flex;
  align-items: center;
  padding: 0 8px;
  color: #64748b;
  text-decoration: none;
  font-size: 14px;
  position: relative;
  transition: color 0.2s;
}

.nav-link:hover {
  color: #2563eb;
}

.nav-link.router-link-active {
  color: #2563eb;
  font-weight: 600;
}

.nav-link.router-link-active::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: #2563eb;
  border-radius: 2px 2px 0 0;
}

@media (max-width: 480px) {
  .topbar {
    padding: 0 16px;
  }

  .navigation {
    position: static;
    transform: none;
    margin-left: auto;
    gap: 12px;
  }
}
</style>