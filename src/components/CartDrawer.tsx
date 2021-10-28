import React from "react";
import styled from "styled-components";
import { IconButton } from "@mui/material";
import { Close } from "@mui/icons-material";
import { MyDeleteIcon } from "./UI";

interface CartDrawerComponent {
  onClose: () => void;
}

const CartDrawer: React.FC<CartDrawerComponent> = ({ onClose }) => {
  return (
    <Overlay>
      <Cart>
        {/* <EmptyCart>
          <h3>Your cart is empty</h3>
          <img src={cartImage} alt="cart" />
          <IconButton color="primary" onClick={onClose}>
            <KeyboardBackspaceIcon fontSize="large" />
          </IconButton>
        </EmptyCart> */}

        <CartHeader>
          <h3>Your Cart</h3>
          <IconButton color="primary" onClick={onClose}>
            <Close />
          </IconButton>
        </CartHeader>

        <BookInfo>
          <img
            src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"
            alt="book"
          />
          <Info>
            <h3>Book title</h3>
            <h4>Author</h4>
            <span>525 UAH</span>
          </Info>
          <div>

          <MyDeleteIcon />
          </div>

        </BookInfo>

        <CartFooter>
          <h3>Summary:</h3>
          <strong>1299 {' '}$</strong>
        </CartFooter>
      </Cart>
    </Overlay>
  );
};

export default CartDrawer;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 100;
`;
const Cart = styled.div`
  position: fixed;
  right: 0;
  top: 0;
  width: 350px;
  height: 100vh;
  background: #1c1c22;
  color: #fff;
  z-index: 1;
  padding: 40px 20px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  h3, h4 {
    font-weight: 300;
  }
`;

const EmptyCart = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  img {
    width: 130px;
    height: 130px;
    margin-top: 30px;
    margin-bottom: 30px;
  }

  h3 {
    text-align: center;
    color: #fff;
    font-size: 18px;
    font-weight: 300;
  }
`;

const CartHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const BookInfo = styled.div`
  display: flex;
  // align-items: center;
  justify-content: space-between;

  img {
    width: 100px;
    height: 120px;
    object-fit: cover;
    margin-right: 10px;
  }
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const CartFooter = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;

  strong {
    box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
    color: #fff;
    font-size: 16px;
    font-weight: 500;
    padding: 10px 20px;
    border-radius: 5px;
    margin-right: 10px;
  }
`;
