import { Dispatch } from 'redux'

import { GetUserDetailsActionType } from '../actionTypes'
import { GetUserDetailsAction, UserDetails } from '../actionModels'
import request from '../../api'

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
