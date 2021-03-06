import { FC } from "react";
import styled from "styled-components";
import { IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
//!FIXME
interface HeaderProps {
  onInputChange: any;
  onFormSubmit: any;
  openCartDrawer: any;
}

const Header: FC<HeaderProps> = ({
  onInputChange,
  onFormSubmit,
  openCartDrawer,
}) => {
  return (
    <MyHeader>
      <h1>Books</h1>

      <FormWrapper onSubmit={onFormSubmit}>
        <Input onChange={onInputChange} type="text" placeholder="Search" />

        <IconButton type="submit" onClick={onFormSubmit}>
          <SearchIcon color="primary" />
        </IconButton>
      </FormWrapper>

      <Auth>
        <Button>Log In</Button>
        <Button>Sign Up</Button>
      </Auth>

      <CartWrapper>
        <strong>759 UAH</strong>

        <IconButton color="primary" onClick={openCartDrawer}>
          <ShoppingCart />
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
  width: 100%;

  h1 {
    text-transform: uppercase;
    font-size: 42px;
    font-family: "Big Shoulders Stencil Display", cursive;
    letter-spacing: 2.5px;
    color: white;
    padding: 2px;
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
    margin-right: 10px;
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

const ShoppingCart = styled(ShoppingCartIcon)`
  font-size: 26px !important;
`;
