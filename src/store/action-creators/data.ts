import axios, { AxiosResponse } from "axios";
import { Dispatch } from "redux";
import { Books, BooksAction, BooksActionTypes } from "../../types/books";
import { Book, BookAction, BookActionTypes } from "../../types/book";

export const fetchBooks = (search: string) => {
  const API_KEY = process.env.REACT_APP_API_KEY;

  return async (dispatch: Dispatch<BooksAction>) => {
    try {
      dispatch({ type: BooksActionTypes.FETCH_BOOKS });
    
      const res: AxiosResponse<Books> = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${search}&key=${API_KEY}`);
 
      dispatch({ type:BooksActionTypes.FETCH_BOOKS_SUCCESS, payload: res.data.items});
    } catch (err) {
      dispatch({
        type: BooksActionTypes.FETCH_BOOKS_ERROR,
        payload: "Some Error Messages Here",
      });
    }
  };
};

export const fetchOneBook = (id: string) => {
  return async (dispatch: Dispatch<BookAction>) => {
    try {
      dispatch({ type: BookActionTypes.FETCH_ONE_BOOK });
      
      const res: AxiosResponse<Book> = await axios.get(`https://www.googleapis.com/books/v1/volumes/${id}`);
      
      dispatch({ type:BookActionTypes.FETCH_BOOK_SUCCESS, payload: res.data});
    } catch (err) {
      dispatch({
        type: BookActionTypes.FETCH_BOOK_ERROR,
        payload: "Some Error Messages Here",
      });
    }
  };
};
