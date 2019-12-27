import Taro from '@tarojs/taro'

import { LOGIN, LOGOUT } from '../constants/types'

const INITIAL_STATE = {
  isLogin: Taro.getStorageSync('token') ? true : false,
  user: {
    username: Taro.getStorageSync('username') || '',
    token: Taro.getStorageSync('token') || '',
  },
}

export default function common(state = INITIAL_STATE, action) {
  switch (action.type) {
    case LOGIN:
      const { username, token } = action.payload
      Taro.setStorageSync('username', username)
      Taro.setStorageSync('token', token)
      return {
        ...state,
        isLogin: true,
        user: {
          username,
          token,
        },
      }
    case LOGOUT:
      Taro.clearStorage()
      return {
        ...state,
        isLogin: false,
        user: {
          username: '',
          token: '',
        },
      }
    default:
      return state
  }
}
