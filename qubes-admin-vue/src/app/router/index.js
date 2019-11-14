import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter);

// System routes
const routes = [
  {path: '/createvm', name:'createvm', component: require('../components/CreateVM.vue').default},
  {path: '/', name:'home', component: require('../components/Index.vue').default},
  {path: '/pools', name:'pools', component: require('../components/Pools.vue').default},
  {path: '/labels', name:'labels', component: require('../components/Labels.vue').default}
];

// Define VueRouter
const router = new VueRouter({
  mode: 'history',
  routes,
  linkActiveClass: "active",
  linkExactActiveClass: "exact-active",
})

export default router;
