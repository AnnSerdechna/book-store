import React from "react";
import styled from "styled-components";

import Home from "./pages/Home";

const App: React.FC = () => {
  return (
    <Main>
      <Home />
    </Main>
  );
};

export default App;

const Main = styled.div`
  max-width: 1100px;
  margin: 20px auto;
`;


