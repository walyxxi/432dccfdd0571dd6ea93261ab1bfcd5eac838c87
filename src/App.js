import React, { useState } from "react";
import "./App.css";
import styled from "styled-components";
import Navbar from "./components/Navbar";
import Content from "./components/Content";
import CartDialog from "./components/CartDialog";
import LocSearch from "./components/LocSearch";

const Container = styled.div`
  display: flex;
  width: 370px;
  margin: auto;
`;

const App = () => {
  const [locSearchToggle, setLocSearchToggle] = useState(false);
  const [cartValue, setCartValue] = useState(null);

  return (
    <Container>
      <Navbar setLocSearchToggle={setLocSearchToggle} />
      <Content cartValue={cartValue} setCartValue={setCartValue} />
      {cartValue && <CartDialog cartValue={cartValue} />}
      {locSearchToggle && <LocSearch setLocSearchToggle={setLocSearchToggle} />}
    </Container>
  );
};

export default App;
