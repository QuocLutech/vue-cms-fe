import { createRouter, createWebHistory } from "vue-router";

import HomeView from '/src/componentsView/HomeView.vue'
import AboutView from '/src/componentsView/AboutView.vue'

const routes =[
    { path: '/', component: HomeView , name : 'Home' },
    { path: '/home', component: HomeView , name : 'home' },
    { path: '/about', component: AboutView , name : 'about' }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router