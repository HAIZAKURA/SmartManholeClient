import { setUserName, setUserAuth, setUserDept } from 'src/utils/storage'
import * as types from './mutation-type'

// set user name
export const setUname = function({ commit }, uname) {
  commit(types.SET_UNAME, setUserName(uname))
}

// set user auth
export const setUauth = function({ commit }, uauth) {
  commit(types.SET_UAUTH, setUserAuth(uauth))
}

// set user dept
export const setUdept = function({ commit }, udept) {
  commit(types.SET_UDEPT, setUserDept(udept))
}
