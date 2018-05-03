// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
import router from './router'
import store from './store'
import App from './App'
import { sync } from 'vuex-router-sync'
import { AjaxPlugin } from 'vux'
import { TransferDom } from 'vux'


require('es6-promise').polyfill()
Vue.use(AjaxPlugin)
Vue.directive('transfer-dom', TransferDom)
sync(store, router)

FastClick.attach(document.body)

Vue.config.productionTip = false


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app-box')


