import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  tabs: [{id: 0, label: '推荐', link: '/recommend'}, {id: 1, label: '房产', link: '/estate'}, {id: 2, label: '投资', link: '/investment'}]
}

const mutations = {

}

const getters = {
  getTabs: state => {
    return state.tabs
  }
}

export default new Vuex.Store({
  state, mutations, getters
})
