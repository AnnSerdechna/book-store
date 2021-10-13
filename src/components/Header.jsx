import styled from "styled-components";
import { IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";

const Header = () => {
  return (
    <MyHeader>
      <h1>Books</h1>

      <InputWrapper>
        <Input type="text" placeholder="Search" />

        <IconButton>
          <SearchIcon color="primary" />
        </IconButton>
      </InputWrapper>

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
  );
};

export default Header;

const MyHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px 20px 20px;

  h1 {
    text-transform: uppercase;
    font-size: 32px;
    font-family: "Big Shoulders Stencil Display", cursive;
    letter-spacing: 2.5px;
    color: white;
    padding: 2px;
    border-radius: 5px;
    cursor: pointer;
  }
`;

const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #1976d2;
  padding: 0 10px;
  border-radius: 5px;
`;

const Input = styled.input`
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
    background: #ff1536;
    color: #fff;
    font-size: 16px;
    font-weight: 500;
    padding: 5px;
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
  padding: 5px 10px;
  margin: 10px;
  transition: all 300ms;

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
