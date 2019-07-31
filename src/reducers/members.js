import {
  MEMBERS_LOADING,
  MEMBERS_LOADED,
  MEMBERS_FAILED_TO_LOAD
} from '../action-creators/action-types'

export default (state = [], action) => {
  switch (action.type) {
    case MEMBERS_LOADING:
    case MEMBERS_FAILED_TO_LOAD:
      return []
    case MEMBERS_LOADED:
      return action.payload || []
    default:
      return state
  }
}
