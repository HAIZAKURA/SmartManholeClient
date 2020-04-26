import * as types from './mutation-type'

const mutations = {
  // modify user name
  [types.SET_UNAME](state, uname) {
    state.uname = uname
  },
  // modify user auth
  [types.SET_UAUTH](state, uauth) {
    state.uauth = uauth
  },
  // modify user dept
  [types.SET_UDEPT](state, udept) {
    state.udept = udept
  }
}

export default mutations
