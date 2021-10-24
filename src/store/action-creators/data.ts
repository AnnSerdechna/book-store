import axios, { AxiosResponse } from "axios";
import { Dispatch } from "redux";
import { Books, BooksAction, BooksActionTypes } from "../../types/books";

export const fetchBooks = (search: string) => {
  const API_KEY = process.env.REACT_APP_API_KEY;

  return async (dispatch: Dispatch<BooksAction>) => {
    try {
      dispatch({ type: BooksActionTypes.FETCH_BOOKS });
      //!FIXME
      const res: AxiosResponse<Books> = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${search}&key=${API_KEY}`)
 
      dispatch({ type:BooksActionTypes.FETCH_BOOKS_SUCCESS, payload: res.data.items})
    } catch (err) {
      dispatch({
        type: BooksActionTypes.FETCH_BOOKS_ERROR,
        payload: "Some Error Messages Here",
      });
    }
  };
};
