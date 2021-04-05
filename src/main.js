import Vue from 'vue'
import VueI18n from 'vue-i18n'
import VueRouter from 'vue-router'
import App from './App.vue'
import info from './info.js'
import cv from './components/cv.vue'

Vue.use(VueRouter)
Vue.use(VueI18n)
Vue.config.productionTip = false
const i18n = new VueI18n({
  locale: 'en',
  messages: info
})

const routes = [
  { path: '/', component: cv },
  { path: '/:locale', component: cv },
]
const router = new VueRouter({
  routes
})

new Vue({
  i18n,
  router,
  render: h => h(App),
}).$mount('#app')
