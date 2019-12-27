import AJAX from '../libs/Ajax/index'

import { API_URL } from '../constants/index'

const commonService = {
  /**
   * get common data service
   */
  getCommonDataService() {
    return AJAX(`${API_URL}/common`, 'GET', null)
  },
}

export default commonService
