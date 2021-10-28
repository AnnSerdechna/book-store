export interface BookState {
  book: object;
  loading: boolean;
  error: null | string;
}

export interface Book {
  data: object;
}

export enum BookActionTypes {
  FETCH_ONE_BOOK = "FETCH_ONE_BOOK",
  FETCH_BOOK_SUCCESS = "FETCH_BOOK_SUCCESS",
  FETCH_BOOK_ERROR = "FETCH_BOOK_ERROR",
}

interface FetchOneBookAction {
  type: BookActionTypes.FETCH_ONE_BOOK;
}

interface FetchBookSuccessAction {
  type: BookActionTypes.FETCH_BOOK_SUCCESS;
  payload: any[] | object;
}
interface FetchBookErrorAction {
  type: BookActionTypes.FETCH_BOOK_ERROR;
  payload: string;
}

export type BookAction =
  | FetchOneBookAction
  | FetchBookSuccessAction
  | FetchBookErrorAction;