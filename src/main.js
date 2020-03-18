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
  routes
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
