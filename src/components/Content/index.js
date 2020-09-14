import React from "react";
import { Container, DateText, BoxMargin } from "./styles";
import moment from "moment";
import EatingTime from "./EatingTime";
import CardMenu from "./CardMenu";

const Content = (props) => {
  const { cartValue, setCartValue, dateSelected, eatTime, setEatTime } = props;

  return (
    <Container>
      <EatingTime eatTime={eatTime} setEatTime={setEatTime} />
      <DateText>{moment(dateSelected).format("dddd, DD MMMM YYYY")}</DateText>
      <CardMenu
        eatTime={eatTime}
        cartValue={cartValue}
        setCartValue={setCartValue}
      />
      <CardMenu
        eatTime={eatTime}
        cartValue={cartValue}
        setCartValue={setCartValue}
      />
      <CardMenu
        eatTime={eatTime}
        cartValue={cartValue}
        setCartValue={setCartValue}
      />
      {cartValue && <BoxMargin />}
    </Container>
  );
};

export default Content;
