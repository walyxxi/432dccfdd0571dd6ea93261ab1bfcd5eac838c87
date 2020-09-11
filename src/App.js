import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import style from "styled-components";
import DateScroll from "./components/DateScroll";

const Container = style.div`
  display: flex;
  flex-direction: column;
  width: 375px;
  margin: auto;
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
