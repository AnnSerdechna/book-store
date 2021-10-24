import React from "react";
import styled from "styled-components";
import { useActions } from "../hooks/useActions";
import { useTypedSelector } from "../hooks/useTypedSelector";

import Header from "../components/Header";
import Book from "../components/Book";

const Home: React.FC = () => {
  const { books, loading, error } = useTypedSelector((state) => state.data);
  const { fetchBooks } = useActions();

  const [inputValue, setInputValue] = React.useState("");

  React.useEffect(() => {
    fetchBooks("react");
  }, []);

  if (loading) {
    return <h3>LOADING...</h3>;
  }

  if (error) {
    return <h2>Error Error Error</h2>;
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (
    e: React.FormEvent<HTMLFormElement | HTMLButtonElement>
  ) => {
    e.preventDefault();
    fetchBooks(inputValue);
    setInputValue("");
  };

  return (
    <>
      <Header onInputChange={handleChange} onFormSubmit={handleSubmit} />

      <BooksWrapper>
        {books?.map((book) => (
          <Book key={book.id} {...book} />
        ))}
      </BooksWrapper>
    </>
  );
};

export default Home;

const BooksWrapper = styled.div`
  padding: 20px;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 20px;
`;
