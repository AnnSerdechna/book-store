import { IBooksProps } from "./data";

export interface IBooksState {
  items: IBooksProps[];
  loading: boolean;
  error: null | string;
}
//!FIXME
export interface IBookState {
  onebook: IBooksProps;
  loading: boolean;
  error: null | string;
}


export enum BooksActionTypes {
  FETCH_BOOKS = "FETCH_BOOKS",
  FETCH_ONE_BOOK = "FETCH_ONE_BOOK",
  FETCH_BOOKS_SUCCESS = "FETCH_BOOKS_SUCCESS",
  FETCH_BOOKS_ERROR = "FETCH_BOOKS_ERROR",
  FETCH_BOOK_ERROR = "FETCH_BOOK_ERROR",
  FETCH_BOOK_SUCCESS = "FETCH_BOOK_SUCCESS"

}
interface FetchBooksAction {
  type: BooksActionTypes.FETCH_BOOKS;
}
interface FetchBooksSuccessAction {
  type: BooksActionTypes.FETCH_BOOKS_SUCCESS;
  payload: IBooksProps[];
}
interface FetchBooksErrorAction {
  type: BooksActionTypes.FETCH_BOOKS_ERROR;
  payload: string;
}

//
interface FetchOneBookAction {
  type: BooksActionTypes.FETCH_ONE_BOOK;
}

interface FetchBookSuccessAction {
  type: BooksActionTypes.FETCH_BOOK_SUCCESS;
  payload: IBooksProps;
}
interface FetchBookErrorAction {
  type: BooksActionTypes.FETCH_BOOK_ERROR;
  payload: string;
}
//

export type BooksAction =
  | FetchBooksAction
  | FetchBooksSuccessAction
  | FetchBooksErrorAction

  | FetchOneBookAction
  | FetchBookSuccessAction
  | FetchBookErrorAction