import React from "react";
import styled from "styled-components";
import { Link, useParams } from "react-router-dom";
import { IconButton } from "@mui/material";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";

import { useActions } from "../hooks/useActions";
import { useTypedSelector } from "../hooks/useTypedSelector";
import MainLayout from "../containers/MainLayout";
import { MyFavoriteIcon, MyAddIcon, MyDeleteIcon } from "./UI";

const BookDetails = () => {
  const { id } = useParams();
  const { book, loading, error } = useTypedSelector((state) => state.book);
  const { fetchOneBook } = useActions();

  React.useEffect(() => {
    fetchOneBook(id);
  }, []);

  if (loading) {
    return <h3>LOADING...</h3>;
  }

  if (error) {
    return <h2>Error Error Error</h2>;
  }

  console.log(book);

  return (
    <Wrapper>
      <Link to="/">
        <IconButton color="primary">
          <KeyboardBackspaceIcon fontSize="large" />
        </IconButton>
      </Link>

      <MainLayout>
        <Container>
          <TopBlock>
            <img
              src={book.volumeInfo?.imageLinks?.smallThumbnail}
              alt={book.volumeInfo?.title}
            />
            <InfoBlock>
              <h2>{book.volumeInfo?.title}</h2>
              <h3>{book.volumeInfo?.authors?.join(",")}</h3>
              <i>{book.volumeInfo?.categories?.join(",")}</i>
              <span>
                <p>
                  {book.volumeInfo?.publisher}, {book.accessInfo?.country}
                </p>
                <p>{book.volumeInfo?.publishedDate}</p>
              </span>
              <span>
                <strong>{book.saleInfo?.retailPrice?.amount}</strong>{" "}
                {book.saleInfo?.retailPrice?.currencyCode}
              </span>
            </InfoBlock>
            <div>
              <Icons>
                <li>
                  <MyAddIcon />
                </li>
                <li>
                  <MyFavoriteIcon />
                </li>
                <li>
                  <MyDeleteIcon />
                </li>
              </Icons>
            </div>
          </TopBlock>

          <BottomBlock>
            <p>{book.volumeInfo?.description}</p>
            <a href={book.saleInfo?.buyLink} target="_blank">
              Buy
            </a>
            <a href={book.accessInfo?.webReaderLink} target="_blank">
              Read
            </a>
          </BottomBlock>
        </Container>
      </MainLayout>
    </Wrapper>
  );
};

export default BookDetails;

const Wrapper = styled.div``;

const Container = styled.div`
  width: 800px;
  padding: 20px;
  font-size: 16px;
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
  border-radius: 5px;
`;

const Icons = styled.ul`
  display: flex;
  align-items: center;

  li {
    list-style: none;
  }
`;

const TopBlock = styled.div`
  display: flex;
  gap: 30px;
  margin-bottom: 30px;
  letter-spacing: 1px;

  img {
    width: 150px;
    object-fit: contain;
  }
`;

const InfoBlock = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  flex: 1;

  strong {
    color: #ff1536;
    font-size: 18px;
    font-weight: 400;
  }
`;

const BottomBlock = styled.div`
  p {
    word-break: break-all;
    margin-bottom: 20px;
  }

  a {
    margin-right: 20px;
    font-size: 20px;
    color: #1976d2;
    text-decoration: none;
    transition: all 200ms;

    &:hover {
      text-decoration: underline;
      color: #ff1536;
    }
  }
`;
