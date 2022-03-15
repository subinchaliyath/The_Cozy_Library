import {
  GetUserDetailsActionType,
  UpdateUserDetailsActionType,
} from '../actionTypes'

import { UserDetails } from '../../models'

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
interface UpdateUserDetailsRequestAction {
  type: UpdateUserDetailsActionType.UPDATE_USER_REQUEST
}

interface UpdateUserDetailsSuccessAction {
  type: UpdateUserDetailsActionType.UPDATE_USER_SUCCESS
  payload: UserDetails
}

interface UpdateUserDetailsFailAction {
  type: UpdateUserDetailsActionType.UPDATE_USER_FAIL
  payload: string[] | null
}

export type UpdateUserDetailsAction =
  | UpdateUserDetailsRequestAction
  | UpdateUserDetailsSuccessAction
  | UpdateUserDetailsFailAction
