import { Link } from "react-router-dom";
import styled from "styled-components";
import Stack from "@mui/material/Stack";

import { MyFavoriteIcon, MyAddIcon } from "./UI";
import { FC } from "react";

interface IAccessInfo {
  webReaderLink: string;
  country: string;
}

interface IRetailPrice {
  amount: number;
  currencyCode: string;
}

interface ISaleInfo {
  buyLink: string;
  country: string;
  retailPrice: IRetailPrice;
}

interface IImages {
  smallThumbnail: string;
}

interface IVolumeInfo {
  authors: string[];
  categories?: string[];
  description?: string;
  imageLinks: IImages;
  title: string;
  infoLink: string;
}

interface IBooksProps {
  volumeInfo: IVolumeInfo;
  saleInfo: ISaleInfo;
  accessInfo: IAccessInfo;
  id: string;
}

const Book: FC<IBooksProps> = (props) => {
  return (
    <BookContainer>
      <ImageWrapper>
        <img
          src={
            props.volumeInfo?.imageLinks?.smallThumbnail ||
            "https://uusaratoga.org/wp-content/uploads/2020/05/Books.jpg"
          }
        />

        <Stack spacing={2}>
          <MyAddIcon />
          <MyFavoriteIcon />
        </Stack>
      </ImageWrapper>

      <h1>
        <a href={props.volumeInfo?.infoLink} target="_blank">
          {props.volumeInfo?.title}
        </a>
      </h1>

      <Authors>
        <p>{props.volumeInfo?.authors?.join(",")}</p>
      </Authors>

      <Bottom>
        <span>
          <strong>
            {Math.floor(props.saleInfo?.retailPrice?.amount) || 310}
          </strong>{" "}
          {props.saleInfo?.retailPrice?.currencyCode || "UAH"}
        </span>
        <span>
          <a href={props.accessInfo.webReaderLink} target="_blank">
            Read
          </a>
        </span>
      </Bottom>

      <Link to={`/book/${props.id}`}>View More</Link>
    </BookContainer>
  );
};

export default Book;

const BookContainer = styled.div`
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

  h1 {
    font-size: 18px;
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

const Bottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  strong {
    font-weight: 300;
    color: #ff1536;
  }

  a {
    color: #1f87ff;

    &:hover {
      color: #fff;
    }
  }
`;
