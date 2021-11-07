import { IBookState, BooksActionTypes, BooksAction } from "../../types/books";
import { IBooksProps } from "../../types/data";

const initialState: IBookState = {
  onebook: <IBooksProps>{},
  loading: false,
  error: null,
};

export const bookDetailsReducer = (
  state = initialState,
  action: BooksAction
): IBookState => {
  switch (action.type) {
    case BooksActionTypes.FETCH_ONE_BOOK:
      return {
        onebook: <IBooksProps>{},
        loading: true,
        error: null,
      };
    case BooksActionTypes.FETCH_BOOK_SUCCESS:
      return {
        onebook: action.payload,
        loading: false,
        error: null,
      };
    case BooksActionTypes.FETCH_BOOK_ERROR:
      return {
        onebook: <IBooksProps>{},
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
