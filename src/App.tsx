import React from "react";
import { Route } from "react-router-dom";
import BookDetails from "./components/BookDetails";

import Home from "./pages/Home";

const App: React.FC = () => {
  return (
    <>
      <Route path="/" exact component={Home} />
      <Route path="/book/:id" exact component={BookDetails} />
       
    </>
  );
};

export default App;


