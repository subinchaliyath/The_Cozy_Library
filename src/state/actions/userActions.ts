import { Dispatch } from 'redux'

import {
  GetUserDetailsActionType,
  UpdateUserDetailsActionType,
} from '../actionTypes'
import { GetUserDetailsAction, UpdateUserDetailsAction } from '../actionModels'
import request from '../../api'
import { UserDetails } from '../../models'

export const getUserDetails =
  () => async (dispatch: Dispatch<GetUserDetailsAction>) => {
    try {
      dispatch({
        type: GetUserDetailsActionType.USER_DETAILS_REQUEST,
      })

      const { data } = await request.get<UserDetails>('/user')

      dispatch({
        type: GetUserDetailsActionType.USER_DETAILS_SUCCESS,
        payload: data,
      })
    } catch (error: any) {
      dispatch({
        type: GetUserDetailsActionType.USER_DETAILS_FAIL,
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        payload: error,
      })
    }
  }
export const updateUserDetails =
  (user: UserDetails) =>
  async (dispatch: Dispatch<UpdateUserDetailsAction>) => {
    try {
      dispatch({
        type: UpdateUserDetailsActionType.UPDATE_USER_REQUEST,
      })
      console.log(user)

      const { data } = await request.put<UserDetails>('/user', user)
      dispatch({
        type: UpdateUserDetailsActionType.UPDATE_USER_SUCCESS,
        payload: data,
      })
    } catch (error: any) {
      dispatch({
        type: UpdateUserDetailsActionType.UPDATE_USER_FAIL,
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        payload: error,
      })
    }
  }
