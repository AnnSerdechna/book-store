import { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import Book from "./components/Book";
import Header from "./components/Header";
import Pagination from "./components/Pagination";


function App() {
  const [books, setBooks] = useState([]);
  
  const API_KEY = process.env.REACT_APP_API_KEY;

  useEffect(() => {
    axios
      .get(`https://www.googleapis.com/books/v1/volumes?q=typescript&key=${API_KEY}`)
      .then((res) => {
        setBooks(res.data.items);
        // console.log('[res.data]', res.data);// totalItems: 538
      });
  }, []);

  console.log("[books]", books);

  return (
    <Main>
      <Header />
      <BooksWrapper>
        {books.map((book) => (
          <Book key={book.id} {...book} />
        ))}
      </BooksWrapper>

      <PaginationWrapper>
        <Pagination />
      </PaginationWrapper>
    </Main>
  );
}

export default App;

const Main = styled.div`
  max-width: 1100px;
  margin: 20px auto;
`;

const BooksWrapper = styled.div`
  padding: 20px;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 20px;
`;
const PaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
`;
