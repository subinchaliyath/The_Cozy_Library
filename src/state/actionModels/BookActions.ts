import { AddBookActionType } from '../actionTypes'

import { BookDetails } from '../../models'

interface AddBookRequestAction {
  type: AddBookActionType.ADD_BOOK_REQUEST
}

interface AddBookSuccessAction {
  type: AddBookActionType.ADD_BOOK_SUCCESS
  payload: BookDetails
}

interface AddBookFailAction {
  type: AddBookActionType.ADD_BOOK_FAIL
  payload: string[] | null
}

export type AddBookAction =
  | AddBookRequestAction
  | AddBookSuccessAction
  | AddBookFailAction
