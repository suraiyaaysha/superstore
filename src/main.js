import Vue from 'vue'
import App from './App.vue'

window.$ = window.jQuery =require('jquery')
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

Vue.config.productionTip = false

import VueRouter from 'vue-router'
Vue.use(VueRouter)

import {routes} from './router/index'

const router = new VueRouter({
  // mode: 'history',
  routes
})

import Vuex from 'vuex'

Vue.use(Vuex)

import { storage } from './store/index'

const store = new Vuex.Store(storage)

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')