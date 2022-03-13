import { GetUserDetailsActionType } from '../actionTypes'

export interface UserDetails {
  email: string
  id: string
  name: string
}

interface GetUserDetailsRequestAction {
  type: GetUserDetailsActionType.USER_DETAILS_REQUEST
}

interface GetUserDetailsSuccessAction {
  type: GetUserDetailsActionType.USER_DETAILS_SUCCESS
  payload: UserDetails
}

interface GetUserDetailsFailAction {
  type: GetUserDetailsActionType.USER_DETAILS_FAIL
  payload: string[] | null
}

export type GetUserDetailsAction =
  | GetUserDetailsRequestAction
  | GetUserDetailsSuccessAction
  | GetUserDetailsFailAction
