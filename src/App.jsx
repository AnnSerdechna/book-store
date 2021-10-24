import { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import Book from "./components/Book";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

function App() {
  const [data, setData] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const API_KEY = process.env.REACT_APP_API_KEY;

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .get(
        `https://www.googleapis.com/books/v1/volumes?q=${inputValue}&key=${API_KEY}&startIndex=1&maxResults=40`
      )
      .then((res) => {
        const data = res.data.items;
        setData(data);
      });

    setInputValue("");
  };

  useEffect(() => {
    axios
      .get(
        `https://www.googleapis.com/books/v1/volumes?q=react&key=${API_KEY}&startIndex=0&maxResults=10`
      )
      .then((res) => {
        const data = res.data.items;
        console.log('[data]', data);
        
        setData(data);
      });
  }, []);

  return (
    <Main>
      <MyHeader>
        <h1>
          Books <br /> Finder
        </h1>

        <FormWrapper onSubmit={handleSubmit}>
          <Input
            value={inputValue}
            type="text"
            placeholder="Search"
            onChange={handleChange}
          />

          <IconButton onClick={handleSubmit}>
            <SearchIcon color="primary" />
          </IconButton>
        </FormWrapper>

        <Auth>
          <Button>Log In</Button>
          <Button>Sign Up</Button>
        </Auth>

        <CartWrapper>
          <strong>759 UAH</strong>
          <IconButton>
            <ShoppingCart color="primary" />
          </IconButton>
          <span>0</span>
        </CartWrapper>
      </MyHeader>

      <BooksWrapper>
        {data?.map((book) => (
          <Book key={book.id} {...book} />
        ))}
      </BooksWrapper>
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

const MyHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px 20px 20px;

  h1 {
    text-transform: uppercase;
    font-size: 28px;
    font-family: "Big Shoulders Stencil Display", cursive;
    letter-spacing: 2.5px;
    color: white;
    border-radius: 5px;
    cursor: pointer;
  }
`;

const FormWrapper = styled.form`
  display: flex;
  flex: 0.6;
  align-items: center;
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
  padding: 5px 20px;
  border-radius: 5px;
`;

const Input = styled.input`
  flex: 1;
  background: transparent;
  border: none;
  outline: none;
  color: #fff;
  font-size: 18px;
  font-weight: 300;
  letter-spacing: 2px;

  &::placeholder {
    color: #1976d2;
  }
`;

const CartWrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;

  strong {
    box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
    color: #fff;
    font-size: 16px;
    font-weight: 500;
    padding: 10px 20px;
    border-radius: 5px;
    margin-right: 3px;
  }

  span {
    color: #ff1536;
    position: absolute;
    top: -5px;
    right: -5px;
    font-weight: 600;
  }
`;

const Auth = styled.div``;

const Button = styled.button`
  background: transparent;
  border: 1px solid #1976d2;
  color: #1976d2;
  border-radius: 5px;
  padding: 10px 20px;
  margin: 10px;
  transition: all 300ms;
  cursor: pointer;

  &:hover {
    border-color: #f40062;
    color: #f40062;
  }

  &:active {
    transform: scale(0.9);
  }
`;

const ShoppingCart = styled(ShoppingBasketIcon)`
  font-size: 28px !important;
`;
