import { combineReducers } from 'redux'
import { GetUserDetailsReducer } from './userReducer'

const rootReducer = combineReducers({ userDetails: GetUserDetailsReducer })

export default rootReducer

export type RootState = ReturnType<typeof rootReducer>
