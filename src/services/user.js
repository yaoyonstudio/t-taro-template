import AJAX from '../libs/Ajax/index'

import { API_URL } from '../constants/index'

const userService = {
  /**
   * login service
   * @param {Object} params - login params ({ username: String, password: String })
   */
  loginService(params) {
    return AJAX(`${API_URL}/user`, 'GET', params)
  },
}

export default userService
