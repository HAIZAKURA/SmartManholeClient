const _storage = window.localStorage
const storage = {
  // get func
  get(key, data = []) {
    if (_storage) {
      return _storage.getItem(key)
        ? Array.isArray(data)
          ? JSON.parse(_storage.getItem(key))
          : _storage.getItem(key)
        : data
    }
  },
  // set func
  set(key, val) {
    if (_storage) {
      _storage.setItem(key, val)
    }
  },
  //clear func
  clear(key) {
    if (_storage) {
      _storage.removeItem(key)
    }
  }
}

/**
 * User Name
 * @type UNAME_KEY: String
 */
const UNAME_KEY = '_uname_'
// get user name
export function getUserName() {
  return String(storage.get(UNAME_KEY, null))
}
// set user name
export function setUserName(uname) {
  storage.set(UNAME_KEY, uname)
  return uname
}

/**
 * User Auth
 * @type UAUTH_KEY: String
 */
const UAUTH_KEY = '_uautu_'
// get user auth
export function getUserAuth() {
  return String(storage.get(UAUTH_KEY, null))
}
// set user auth
export function setUserAuth(uauth) {
  storage.set(UAUTH_KEY, uauth)
  return uauth
}

/**
 * User Dept
 * @type UDEPT_KEY: String
 */
const UDEPT_KEY = '_udept_'
// get user dept
export function getUserDept() {
  return String(storage.get(UDEPT_KEY, null))
}
// set user dept
export function setUserDept(udept) {
  storage.set(UDEPT_KEY, udept)
  return udept
}
