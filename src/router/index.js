import { createRouter, createWebHistory } from "vue-router";

import HomeView from '../View/HomeView.vue'
import AboutView from '../View/AboutView.vue'
import ContactView from "../View/ContactView.vue";
import LoginView from "../View/LoginView.vue";

import { useAuthStore } from '../store/auth.js'

const routes =[
    { path: '/login', component: LoginView , name : 'login' },
    { path: '/', component: HomeView , name : 'home', meta: { requiresAuth: true } },
    { path: '/about', component: AboutView , name : 'about', meta: { requiresAuth: true } },
    { path: '/contact', component: ContactView , name : 'contact', meta: { requiresAuth: true } }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to) => {
  const authStore = useAuthStore()

  if (to.meta.requiresAuth && !authStore.isLoggedIn) {
    return '/login'
  }
})

export default router
