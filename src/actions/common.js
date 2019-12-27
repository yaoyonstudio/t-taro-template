import { GET_COMMON_DATA } from '../constants/types'

import commonService from '../services/common'

export const getCommonData = payload => {
  return {
    type: GET_COMMON_DATA,
    payload: payload,
  }
}

export function getCommonDataAction() {
  return dispatch => {
    commonService.getCommonDataService().then(res => {
      dispatch(getCommonData(res))
    })
  }
}
