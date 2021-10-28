import { BookState, BookActionTypes, BookAction } from "../../types/book";

const initialState: BookState = {
  book: Object,
  loading: false,
  error: null,
};

export const bookDetailsReducer = (
  state = initialState,
  action: BookAction
): BookState => {
  switch (action.type) {
    case BookActionTypes.FETCH_ONE_BOOK:
      return {
        book: Object,
        loading: true,
        error: null,
      };
    case BookActionTypes.FETCH_BOOK_SUCCESS:
      return {
        book: action.payload,
        loading: false,
        error: null,
      };
    case BookActionTypes.FETCH_BOOK_ERROR:
      return {
        book: Object,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
