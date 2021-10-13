import { useState } from "react";
import styled from "styled-components";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import AddIcon from '@mui/icons-material/Add';
import CheckIcon from '@mui/icons-material/Check';

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
            { isFavorite ? <Favorite /> : <FavoriteBorderIcon color="primary" />}
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
  min-width: 200px;
  border-radius: 5px;
  border: 1px solid #1f87ff;
  transition: all 300ms;

  &:hover {
    transform: translateY(-1.5%);
    border-color: #FF1536;
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
    width: 130px;
    height: 200px;
    object-fit: contain;
  }
`;

const CheckBox = styled(CheckIcon)`
  color: #00C549;
`;

const Favorite = styled(FavoriteIcon)`
  color: #FF1536;
`;



{
  /* <a href={accessInfo?.webReaderLink} target="_blank">
        Read
      </a> */
}
{
  /* <a href={saleInfo?.buyLink} target="_blank">
        Buy
      </a> */
}

{
  /* <p>{book.searchInfo.textSnippet}</p> */
}

{
  /* <a href={volumeInfo?.previewLink} target="_blank">
        Preview
      </a> */
}

{
  /* {volumeInfo?.categories?.map((category, index) => (
        <strong key={index} style={{ backgroundColor: "red" }}>
          {category}
        </strong>
      ))} */
}

{
  /* <p>{volumeInfo?.description}</p> */
}

{
  /* <span>pages {volumeInfo?.pageCount}</span> */
}

{
  /* <span>{volumeInfo?.publishedDate} {volumeInfo?.publisher}</span> */
}
