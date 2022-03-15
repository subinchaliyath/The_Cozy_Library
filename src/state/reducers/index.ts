import { combineReducers } from 'redux'
import { addBookReducer } from './bookReducer'
import { GetUserDetailsReducer, UpdateUserDetailsReducer } from './userReducer'

const rootReducer = combineReducers({
  userDetails: GetUserDetailsReducer,
  addBook: addBookReducer,
  updateUser: UpdateUserDetailsReducer,
})

export default rootReducer

export type RootState = ReturnType<typeof rootReducer>
