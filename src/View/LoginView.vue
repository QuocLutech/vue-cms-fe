<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useAuthStore } from '../store/auth.js';

const userName = ref('');
const passWord = ref('');
const showPassword = ref(false);
const authStore = useAuthStore();
const router = useRouter();

function handleLogic() {
  authStore.login();
  router.push('/');
}

function togglePassword() {
  showPassword.value = !showPassword.value;
}
</script>

<template>
  <div class="login-container">
    <div class="login-box">
      <h2>LOGIN</h2>
      <div class="form-group">
        <input
          v-model="userName"
          type="text"
          placeholder="Enter username"
          required
        />
      </div>

      <div class="form-group">
        <input
          v-model="passWord"
          :type="showPassword ? 'text' : 'password'"
          placeholder="Enter password"
          required
        />
        <button type="button" class="toggle-password" @click="togglePassword">
          {{ showPassword ? '👁' : '👁' }}
        </button>
      </div>

      <button type="button" class="login-btn" @click="handleLogic">
        Login
      </button>
    </div>
  </div>
</template>

<style>
.login-container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f7f8fc;
}

.login-box {
  width: 350px;
  padding: 35px;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 6px 24px rgba(30, 40, 90, 0.08);
  display: flex;
  flex-direction: column;
  gap: 18px;
}

.login-box h2 {
  text-align: center;
  margin: 0 0 7px;
}

.form-group {
  position: relative;
}

.form-group input {
  width: 100%;
  box-sizing: border-box;
  padding: 11px 44px 11px 11px;
  border: 1px solid #e2e5ee;
  border-radius: 8px;
}

.password-group {
  position: relative;
}

.toggle-password {
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  width: auto;
  padding: 0;
  border: none;
  background: none;
  font-size: 16px;
  line-height: 1;
  cursor: pointer;
}

.login-btn {
  width: 100%;
  padding: 12px;
  border: none;
  border-radius: 8px;
  background: #4f63f5;
  color: #fff;
  cursor: pointer;
}
</style>
