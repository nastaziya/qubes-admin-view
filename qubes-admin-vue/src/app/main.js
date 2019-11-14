import Vue from 'vue'
import router from './router'
import store from './store'
import  '../css/qubes_dashboard.css'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(fas, fab)
Vue.use(BootstrapVue)

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.component('sidebar-component', require('./components/module/Sidebar.vue').default);
Vue.component('topbar-component', require('./components/module/Topbar.vue').default);


new Vue({
  router,
  store,
  el: '#app',
})