import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count:100
  },
  mutations: {
    add(state,step){
      //变更状态
      state.count+=3
    }
  },
  getters: {
    showNum(state){
      return '当前最新的数量是【'+state.count+'】'
    }
  },
  actions: {
  },
  modules: {
  }
})
