import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate"

import login from './modules/login'

Vue.use(Vuex)

export default new Vuex.Store({

  state: {
    djtoken: '',
  },
  getters: {
  },
  mutations: {
    SET_DJTOKEN(state, val) {
      state.djtoken = val;
    },
  },
  actions: {
  },
  modules: {
    login,
  },
  plugins: [
    createPersistedState({ // 在插件中暂时无法看到持久化的数据，但是可以访问到；
      key: 'store',
      reducer(val) {
        return {
          djtoken: val.djtoken,
        }
      },
    })
  ],
})
