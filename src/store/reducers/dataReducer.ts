import { BooksState, BooksActionTypes, BooksAction } from "../../types/books";

const initialState: BooksState = {
  books: [],
  loading: false,
  error: null,
};

export const dataReducer = (
  state = initialState,
  action: BooksAction
): BooksState => {
  switch (action.type) {
    case BooksActionTypes.FETCH_ONE_BOOK:
      return {
        books: [],
        loading: true,
        error: null,
      };
    case BooksActionTypes.FETCH_BOOKS:
      return {
        books: [],
        loading: true,
        error: null,
      };
    case BooksActionTypes.FETCH_BOOKS_SUCCESS:
      return {
        books: action.payload,
        loading: false,
        error: null,
      };
    case BooksActionTypes.FETCH_BOOKS_ERROR:
      return {
        books: [],
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
