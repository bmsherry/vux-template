import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from 'vuex/dist/logger'
import createModules from './modules';


Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'
const store = new Vuex.Store({
  state: {},
  modules: createModules(),
  strict: debug,
  plugins: debug ? [createLogger()] : []
})


export default store