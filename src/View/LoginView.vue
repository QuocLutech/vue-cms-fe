<script setup>
import { ref } from 'vue';

const userName = ref('');
const passWord = ref('');

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
          type="password"
          placeholder="Enter password"
          required
        />
      </div>

      <button type="button"  >Login</button>
    </div>
  </div>
</template>

<style>
.login-container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f1f5f9;
}
.login-box {
  width: 350px;
  padding: 35px;
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}

.login-box h2 {
  text-align: center;
  margin-bottom: 8px;
}

.login-box p {
  text-align: center;
  color: #64748b;
  margin-bottom: 25px;
}

.form-group {
  margin-bottom: 18px;
}

.form-group label {
  display: block;
  margin-bottom: 7px;
}

.form-group input {
  width: 100%;
  box-sizing: border-box;
  padding: 11px;
  border: 1px solid #cbd5e1;
  border-radius: 6px;
}

button {
  width: 100%;
  padding: 12px;
  border: none;
  border-radius: 6px;
  background: #2563eb;
  color: white;
  cursor: pointer;
}
</style>
