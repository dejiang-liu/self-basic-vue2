const state = {
  cztoken: '',
}

const mutations = {
  SET_CZTOKEN(state, val) {
    state.cztoken = val
  }
}
const getters = {}
const actions = {}

export default {
  namespaced: true,
  state,
  mutations,
  getters,
  actions,
}