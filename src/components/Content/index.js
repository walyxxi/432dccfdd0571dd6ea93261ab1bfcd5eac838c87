import React from "react";
import { Container, DateText, BoxMargin } from "./styles";
import moment from "moment";
import EatingTime from "./EatingTime";
import CardMenu from "./CardMenu";

const Content = (props) => {
  const { cartValue, setCartValue } = props;

  return (
    <Container>
      <EatingTime />
      <DateText>{moment().format("dddd, DD MMMM YYYY")}</DateText>
      <CardMenu cartValue={cartValue} setCartValue={setCartValue} />
      <CardMenu cartValue={cartValue} setCartValue={setCartValue} />
      <CardMenu cartValue={cartValue} setCartValue={setCartValue} />
      {cartValue && <BoxMargin />}
    </Container>
  );
};

export default Content;
