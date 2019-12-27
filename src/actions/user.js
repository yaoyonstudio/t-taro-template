import { LOGIN, LOGOUT } from '../constants/types'

import userService from '../services/user'

export function loginAction(params) {
  return dispatch => {
    userService.loginService(params).then(res => {
      dispatch({
        type: LOGIN,
        payload: res,
      })
    })
  }
}

export function logoutAction() {
  return dispatch => {
    dispatch({
      type: LOGOUT,
    })
  }
}
