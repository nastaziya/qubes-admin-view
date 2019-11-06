
import Vue from 'vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
//import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// Add all icons to the library so you can use it in your page
//library.add(fas, far, fab)
library.add(fas, fab)
Vue.component('font-awesome-icon', FontAwesomeIcon)
//import './bootstrap';

//import App from './App'//Vue.config.productionTip = false
Vue.component('home-component', require('./components/module/Home.vue').default);

new Vue({
  router,
  el: '#app'
  //render: h => h(App)
})