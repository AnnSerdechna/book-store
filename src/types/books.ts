import { IBooksProps } from "./data";

export interface BooksState {
  books: Books[];
  loading: boolean;
  error: null | string;
}

export interface Books {
  items: any[];
}

export enum BooksActionTypes {
  FETCH_BOOKS = "FETCH_BOOKS",
  FETCH_ONE_BOOK = "FETCH_ONE_BOOK",
  FETCH_BOOKS_SUCCESS = "FETCH_BOOKS_SUCCESS",
  FETCH_BOOKS_ERROR = "FETCH_BOOKS_ERROR",
}

interface FetchOneBookAction {
  type: BooksActionTypes.FETCH_ONE_BOOK;
  payload: object;
}

interface FetchBooksAction {
  type: BooksActionTypes.FETCH_BOOKS;
}
interface FetchBooksSuccessAction {
  type: BooksActionTypes.FETCH_BOOKS_SUCCESS;
  payload: any[];
}
interface FetchBooksErrorAction {
  type: BooksActionTypes.FETCH_BOOKS_ERROR;
  payload: string;
}

export type BooksAction =
  | FetchOneBookAction
  | FetchBooksAction
  | FetchBooksSuccessAction
  | FetchBooksErrorAction;