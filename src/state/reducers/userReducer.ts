import { GetUserDetailsAction, UpdateUserDetailsAction } from '../actionModels'
import {
  GetUserDetailsActionType,
  UpdateUserDetailsActionType,
} from '../actionTypes'
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

export const UpdateUserDetailsReducer = (
  state: UsersState = initialState,
  action: UpdateUserDetailsAction,
): UsersState => {
  switch (action.type) {
    case UpdateUserDetailsActionType.UPDATE_USER_REQUEST:
      return { ...state, loading: true, error: null, data: null }
    case UpdateUserDetailsActionType.UPDATE_USER_SUCCESS:
      return { ...state, loading: false, error: null, data: action.payload }
    case UpdateUserDetailsActionType.UPDATE_USER_FAIL:
      return { ...state, loading: false, error: action.payload, data: null }
    default:
      return state
  }
}
