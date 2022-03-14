import { combineReducers } from 'redux'
import { addBookReducer } from './bookReducer'
import { GetUserDetailsReducer } from './userReducer'

const rootReducer = combineReducers({
  userDetails: GetUserDetailsReducer,
  addBook: addBookReducer,
})

export default rootReducer

export type RootState = ReturnType<typeof rootReducer>
