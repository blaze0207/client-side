import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import axios from 'axios'

import App from './vue/app.vue'
import Main from './vue/main.vue'
import About from './vue/about.vue'
import Services from './vue/services.vue'

Vue.use(VueRouter)
Vue.use(Vuex)
Vue.prototype.$http = axios

const router = new VueRouter({
  routes: [
    { path: '/', component: Main },
    { path: '/about', component: About },
    { path: '/services', component: Services }
  ],
})

const store = new Vuex.Store({
  state: {
  },
  mutations: {
  },
})

const app = new Vue({
  el: '#v-app',
  router: router,
  store: store,
  render: h => h(App),
})
