import { Dispatch } from 'redux'

import { AddBookActionType } from '../actionTypes'
import { AddBookAction } from '../actionModels'
import request from '../../api'
import { BookDetails, Book } from '../../models'

export const addBook =
  (book: Book) => async (dispatch: Dispatch<AddBookAction>) => {
    try {
      dispatch({
        type: AddBookActionType.ADD_BOOK_REQUEST,
      })

      const { data } = await request.post<BookDetails>('/data', book)

      dispatch({
        type: AddBookActionType.ADD_BOOK_SUCCESS,
        payload: data,
      })
    } catch (error: any) {
      dispatch({
        type: AddBookActionType.ADD_BOOK_FAIL,
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        payload: error,
      })
    }
  }
