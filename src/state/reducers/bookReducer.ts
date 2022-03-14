import { AddBookAction } from '../actionModels'
import { AddBookActionType } from '../actionTypes'
import { BookState } from '../../models'

const initialState = {
  data: null,
  error: null,
  loading: false,
  success: false,
}

export const addBookReducer = (
  state: BookState = initialState,
  action: AddBookAction,
): BookState => {
  switch (action.type) {
    case AddBookActionType.ADD_BOOK_REQUEST:
      return { ...state, loading: true, error: null, data: null }
    case AddBookActionType.ADD_BOOK_SUCCESS:
      return { ...state, loading: false, error: null, data: action.payload }
    case AddBookActionType.ADD_BOOK_FAIL:
      return { ...state, loading: false, error: action.payload, data: null }
    default:
      return state
  }
}
