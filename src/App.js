import React from "react";
import "./App.css";
import styled from "styled-components";
import Navbar from "./components/Navbar";
import Content from "./components/Content";
import CartDialog from "./components/CartDialog";

const Container = styled.div`
  display: flex;
  width: 375px;
  margin: auto;
`;

const App = () => {
  return (
    <Container>
      <Navbar />
      <Content />
      <CartDialog />
    </Container>
  );
};

export default App;
