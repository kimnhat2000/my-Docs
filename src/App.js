import React from "react";
import { Container } from "react-bootstrap";

import Header from "./components/appStructure/Header";
import Body from "./components/appStructure/Body";

const App = () => {
  return (
    <Container>
      <Header />
      <Body />
    </Container>
  );
};

export default App;
