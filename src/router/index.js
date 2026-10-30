import { createRouter, createWebHistory } from "vue-router";

import HomeView from '../View/HomeView.vue'
import AboutView from '../View/AboutView.vue'
import ContactView from "../View/ContactView.vue";
import LoginView from "../View/LoginView.vue";

const routes =[
    { path: '/login', component: LoginView , name : 'login' },
    { path: '/', component: HomeView , name : 'home' },
    { path: '/about', component: AboutView , name : 'about' },
    { path: '/contact', component: ContactView , name : 'contact' }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router