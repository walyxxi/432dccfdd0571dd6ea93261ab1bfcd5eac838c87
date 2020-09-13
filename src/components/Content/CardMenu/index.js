import React from "react";
import { CardMedia, CardImage, CardCaption } from "./styles";

const CardMenu = () => {
  return (
    <CardMedia>
      <CardImage src={"assets/pizza.jpg"} alt="pizza.jpg" />
      <CardCaption></CardCaption>
    </CardMedia>
  );
};

export default CardMenu;
