import { useState } from "react";
import styled from "styled-components";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import AddIcon from "@mui/icons-material/Add";
import CheckIcon from "@mui/icons-material/Check";

const Books = ({ volumeInfo, saleInfo, accessInfo }) => {
  const [isAdded, setIsAdded] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  const onAddToCart = () => {
    setIsAdded(!isAdded);
  };

  const onAddToFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <Book>
      <ImageWrapper>
        <img
          src={
            volumeInfo?.imageLinks?.smallThumbnail ||
            "https://uusaratoga.org/wp-content/uploads/2020/05/Books.jpg"
          }
        />

        <Stack spacing={2}>
          <IconButton onClick={onAddToCart}>
            {isAdded ? <CheckBox /> : <AddIcon color="primary" />}
          </IconButton>
          <IconButton onClick={onAddToFavorite}>
            {isFavorite ? <Favorite /> : <FavoriteBorderIcon color="primary" />}
          </IconButton>
        </Stack>
      </ImageWrapper>

      <a href={volumeInfo?.infoLink} target="_blank">
        {volumeInfo?.title}
      </a>

      <Authors>
        <p>{volumeInfo?.authors?.join(",")}</p>
      </Authors>

      <span style={{ display: "flex" }}>
        {saleInfo?.retailPrice?.amount || 310}{" "}
        {saleInfo?.retailPrice?.currencyCode || "UAH"}
      </span>
    </Book>
  );
};

export default Books;

const Book = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  padding: 10px;
  color: white;
  border-radius: 5px;
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
  transition: all 300ms;

  &:hover {
    transform: translateY(-1.5%);
    border-color: #ff1536;
  }

  a {
    word-break: break-all;
    width: 100%;
    text-decoration: none;
    font-weight: 500;
    color: white;
    transition: all 300ms;

    &:hover {
      color: #1f87ff;
    }
  }
`;

const Authors = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
  word-break: break-word;
  margin-top: 5px;
  margin-bottom: 5px;

  p {
    font-size: 14px;
  }
`;

const ImageWrapper = styled.div`
  padding: 10px;
  display: flex;
  justify-content: space-between;

  img {
    width: 100px;
    object-fit: contain;
  }
`;

const CheckBox = styled(CheckIcon)`
  color: #00c549;
`;

const Favorite = styled(FavoriteIcon)`
  color: #ff1536;
`;
