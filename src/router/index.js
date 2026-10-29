import { createRouter, createWebHistory } from "vue-router";

import HomeView from '../componentsView/HomeView.vue'
import AboutView from '../componentsView/AboutView.vue'
import ContactView from "../componentsView/ContactView.vue";

const routes =[
    { path: '/', component: HomeView , name : 'home' },
    { path: '/about', component: AboutView , name : 'about' },
    { path: '/contact', component: ContactView , name : 'contact' }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router