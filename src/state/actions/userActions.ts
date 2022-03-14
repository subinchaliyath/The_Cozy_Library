import { Dispatch } from 'redux'

import { GetUserDetailsActionType } from '../actionTypes'
import { GetUserDetailsAction } from '../actionModels'
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
