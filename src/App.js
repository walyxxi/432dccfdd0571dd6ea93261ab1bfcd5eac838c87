import React from "react";
import "./App.css";
import style from "styled-components";
import Navbar from "./components/Navbar";
import Content from "./components/Content";

const Container = style.div`
  display: flex;
  width: 375px;
  margin: auto;
`;

const App = () => {
  return (
    <Container>
      <Navbar />
      <Content />
    </Container>
  );
};

export default App;
