import React from "react";
import styled from "styled-components";
import { useActions } from "../hooks/useActions";
import { useTypedSelector } from "../hooks/useTypedSelector";

import MainLayout from "../containers/MainLayout";
import CartDrawer from "../components/CartDrawer";
import Book from "../components/Book";
import Header from "../components/Header";

const Home: React.FC = () => {
  const { items, loading, error } = useTypedSelector((state) => state.data);
  const { fetchBooks } = useActions();

  const [inputValue, setInputValue] = React.useState("");
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    fetchBooks("react");
  }, []);

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

  const handleOpenCartDrawer = () => {
    setOpen(true);
  };

  const handleCloseCartDrawer = () => {
    setOpen(false);
  };

  console.log('Home');

  return (
    <MainLayout>
      {open && <CartDrawer onClose={handleCloseCartDrawer} />}

      <Header
        onInputChange={handleChange}
        onFormSubmit={handleSubmit}
        openCartDrawer={handleOpenCartDrawer}
      />

      {/* //!FIXME add key */}
      <BooksWrapper>
        {(loading ? Array.from(new Array(10)) : items)?.map((book) => (
          <Book key={book?.id} {...book} />
        ))}
      </BooksWrapper>
    </MainLayout>
  );
};

export default Home;

const BooksWrapper = styled.div`
  padding: 20px;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 20px;
`;
