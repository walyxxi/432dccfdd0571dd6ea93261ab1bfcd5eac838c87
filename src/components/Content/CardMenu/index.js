import React from "react";
import {
  CardMedia,
  CardImage,
  CardCaption,
  FoodStart,
  StartValue,
  TextDark,
  TextGray,
  CardFooter,
  ButtonAdd,
} from "./styles";
import MaterialIcon from "material-icons-react";
import { color } from "../../Pallate";

const CardMenu = (props) => {
  const { cartValue, setCartValue, eatTime } = props;

  const handleAdd = () => {
    setCartValue(cartValue + 1);
  };

  return (
    <CardMedia>
      <CardImage src={"assets/pizza.jpg"} alt="pizza.jpg" />
      <CardCaption>
        <FoodStart>
          <StartValue>4.5</StartValue>
          <MaterialIcon icon="star" color={color.red} size="12px" />
          <MaterialIcon icon="star" color={color.red} size="12px" />
          <MaterialIcon icon="star" color={color.red} size="12px" />
          <MaterialIcon icon="star" color={color.red} size="12px" />
          <MaterialIcon icon="star_half" color={color.red} size="12px" />
        </FoodStart>
        <TextDark>Pizza Pottato Bianca</TextDark>
        <TextGray>by Kulina &bull; Uptown {eatTime}</TextGray>
        <CardFooter>
          <TextDark>Rp. 45,000</TextDark>
          <ButtonAdd onClick={handleAdd}>
            ADD
            <MaterialIcon icon="add" color={color.white} size="14px" />
          </ButtonAdd>
        </CardFooter>
      </CardCaption>
    </CardMedia>
  );
};

export default CardMenu;
