import React from "react";
import "./App.css";
import style from "styled-components";
import Navbar from "./components/Navbar";
import DateScroll from "./components/DateScroll";

const Container = style.div`
  display: flex;
  flex-direction: column;
  width: 375px;
  margin: auto;
  padding: 12px;
  background-color: yellow;
`;

const App = () => {
  return (
    <Container>
      <Navbar />
      <DateScroll />
    </Container>
  );
};

export default App;
