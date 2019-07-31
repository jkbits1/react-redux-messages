import {
  MESSAGES_LOADING,
  MESSAGES_LOADED,
  MESSAGES_FAILED_TO_LOAD
} from '../action-creators/action-types'

export default (state = [], action) => {
  switch (action.type) {
    case MESSAGES_LOADING:
    case MESSAGES_FAILED_TO_LOAD:
      return []
    case MESSAGES_LOADED:
      return action.payload || []
    default:
      return state
  }
}
