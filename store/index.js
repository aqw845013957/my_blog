import Vue from 'vue'
import Vuex from 'vuex'
import topMenu from './modules/top_menu'
Vue.use(Vuex)

const store = new Vuex.Store({
  modules:{
    topMenu,
  },
})