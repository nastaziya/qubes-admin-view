import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter);

// System routes
const routes = [
  {path: '/login', name:'login', component: require('../components/Login.vue').default},
  {path: '/', name:'home', component: require('../components/Index.vue').default},
  {path: '/about', name:'about', component: require('../components/About.vue').default}
];

// Define VueRouter
const router = new VueRouter({
  mode: 'history',
  routes,
  linkActiveClass: "active",
  linkExactActiveClass: "exact-active",
})

export default router;
