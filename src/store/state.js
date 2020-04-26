import { getUserName, getUserAuth, getUserDept } from 'src/utils/storage'

const state = {
  // user name
  uname: getUserName() || null,
  // user auth
  uauth: getUserAuth() || null,
  // user dept
  udept: getUserDept() || null
}

export default state
