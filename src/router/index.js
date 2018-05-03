import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '@/store'
import Home from '@/components/Home'
import Test from '@/components/Test'



Vue.use(VueRouter)


const routes = [{
  path: '/',
  component: Home
}, {
  path: '/test',
  component: Test
}]

const router = new VueRouter({
  mode: process.env.NODE_ENV === "production" ? 'hash' : 'history',
  routes
})


router.beforeEach(function (to, from, next) {
  store.commit('updateLoadingStatus', { isLoading: true })
  next()
})

// router.afterEach(function (to) {
//   store.commit('home', { isLoading: false })
// })


export default router