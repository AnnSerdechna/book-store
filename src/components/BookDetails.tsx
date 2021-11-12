import React, { FC } from "react";
import styled from "styled-components";
import { Link, useParams } from "react-router-dom";
import { IconButton } from "@mui/material";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";

import { useActions } from "../hooks/useActions";
import { useTypedSelector } from "../hooks/useTypedSelector";
import MainLayout from "../containers/MainLayout";
import { MyFavoriteIcon, MyAddIcon } from "./UI";
import MySkeleton from "./UI/MySkeleton";
import { IBooksProps } from "../types/data";

type BookParams = {
  id: string;
};

const BookDetails: FC<IBooksProps> = () => {
  const { id } = useParams<BookParams>();
  const { onebook, loading, error } = useTypedSelector((state) => state.book);
  const { fetchOneBook } = useActions();

  React.useEffect(() => {
    fetchOneBook(id);
  }, []);

  if (error) {
    return <h2>Error Error Error</h2>;
  }

  //!fixme
  const onAddToCart = () => {
    console.log('Add to cart');
  }
  
  return (
    <>
    {loading ? <MySkeleton oneBook={true} booksArray={false} /> : (
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
              src={onebook.volumeInfo?.imageLinks?.smallThumbnail}
              alt={onebook.volumeInfo?.title}
            />
            <InfoBlock>
              <h2>{onebook.volumeInfo?.title}</h2>
              <h3>{onebook.volumeInfo?.authors?.join(",")}</h3>
              <i>{onebook.volumeInfo?.categories?.join(",")}</i>
              <span>
                <p>
                  {onebook.volumeInfo?.publisher}, {onebook.accessInfo?.country}
                </p>
                <p>{onebook.volumeInfo?.publishedDate}</p>
              </span>
              <span>
                <strong>{onebook.saleInfo?.retailPrice?.amount || 310}</strong>{" "}
                {onebook.saleInfo?.retailPrice?.currencyCode}
              </span>
            </InfoBlock>
            <div>
              <Icons>
                <li>
                  <MyAddIcon onAdd={onAddToCart} />
                </li>
                <li>
                  <MyFavoriteIcon />
                </li>
              </Icons>
            </div>
          </TopBlock>

          <BottomBlock>
            <p>{onebook.volumeInfo?.description}</p>
            <a href={onebook.saleInfo?.buyLink} target="_blank">
              Buy
            </a>
            <a href={onebook.accessInfo?.webReaderLink} target="_blank">
              Read
            </a>
          </BottomBlock>
        </Container>
      </MainLayout>
    </Wrapper>
    )}
    </>
  );
};

export default BookDetails;

const Wrapper = styled.div`
margin-top: 20px;
`;

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
    color: #1976d2;
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
      color: #fff;
    }
  }
`;
