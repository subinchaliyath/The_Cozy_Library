import { GetUserDetailsAction } from '../actionModels'
import { GetUserDetailsActionType } from '../actionTypes'
import { UsersState } from '../../models'

const initialState = {
  data: null,
  error: null,
  loading: false,
  success: false,
}

export const GetUserDetailsReducer = (
  state: UsersState = initialState,
  action: GetUserDetailsAction,
): UsersState => {
  switch (action.type) {
    case GetUserDetailsActionType.USER_DETAILS_REQUEST:
      return { ...state, loading: true, error: null, data: null }
    case GetUserDetailsActionType.USER_DETAILS_SUCCESS:
      return { ...state, loading: false, error: null, data: action.payload }
    case GetUserDetailsActionType.USER_DETAILS_FAIL:
      return { ...state, loading: false, error: action.payload, data: null }
    default:
      return state
  }
}
