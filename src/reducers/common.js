import { GET_COMMON_DATA } from '../constants/types'

const INITIAL_STATE = {
  title: '',
  description: '',
}

export default function common(state = INITIAL_STATE, action) {
  switch (action.type) {
    case GET_COMMON_DATA:
      const { appTitle, appDescription } = action.payload
      return {
        ...state,
        title: appTitle,
        description: appDescription,
      }
    default:
      return state
  }
}