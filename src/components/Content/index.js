import React from "react";
import { Container, DateText } from "./styles";
import moment from "moment";
import EatingTime from "./EatingTime";
import CardMenu from "./CardMenu";

const Content = () => {
  return (
    <Container>
      <EatingTime />
      <DateText>{moment().format("dddd, DD MMMM YYYY")}</DateText>
      <CardMenu />
      <CardMenu />
      <CardMenu />
    </Container>
  );
};

export default Content;
