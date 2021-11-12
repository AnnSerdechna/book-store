import React from "react";
import styled from "styled-components";

const MainLayout: React.FC = ({ children }) => {
  return (
    <Main>
      {children}
    </Main>
  )
}

export default MainLayout;

const Main = styled.div`
  max-width: 1100px;
  margin: 20px auto;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: #fff;

  // @media(min-width: 1064px) {
  //   max-width: 900px;
  // }

  // @media(max-width: 360px) {
  //   display: flex;
  //   align-items: center;
  //   justify-content: center;
  // }
`;
