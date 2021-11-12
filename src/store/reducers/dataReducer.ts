import { IBooksState, BooksActionTypes, BooksAction } from "../../types/books";
import { IBooksProps } from "../../types/data";

const initialState: IBooksState = {
  items: <IBooksProps[]>[],
  loading: false,
  error: null,
};

export const dataReducer = (
  state = initialState,
  action: BooksAction
): IBooksState => {
  switch (action.type) {
    case BooksActionTypes.FETCH_BOOKS:
      return {
        items: <IBooksProps[]>[],
        loading: true,
        error: null,
      };
    case BooksActionTypes.FETCH_BOOKS_SUCCESS:
      return {
        items: action.payload,
        loading: false,
        error: null,
      };
    case BooksActionTypes.FETCH_BOOKS_ERROR:
      return {
        items: <IBooksProps[]>[],
        loading: false,
        error: action.payload,
      };




    default:
      return state;
  }
};
