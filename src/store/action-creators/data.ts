import axios, { AxiosResponse } from "axios";
import { Dispatch } from "redux";
import { Book, BooksAction, BooksActionTypes } from "../../types/books";

export const fetchBooks = () => {
  return async (dispatch: Dispatch<BooksAction>) => {
    try {
      dispatch({ type: BooksActionTypes.FETCH_BOOKS });
      //!FIXME
      const res: AxiosResponse<Book> = await axios.get('https://www.googleapis.com/books/v1/volumes?q=react&key=AIzaSyBXmOyPEP7F2oCc7wQjEclpAJ_YxG4pB3I')
 
      dispatch({ type:BooksActionTypes.FETCH_BOOKS_SUCCESS, payload: res.data.items})
    } catch (err) {
      dispatch({
        type: BooksActionTypes.FETCH_BOOKS_ERROR,
        payload: "Some Error Messages Here",
      });
    }
  };
};
