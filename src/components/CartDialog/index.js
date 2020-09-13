import React from "react";
import {
  Container,
  Content,
  BoxColumn,
  BoxRow,
  TextMedium,
  TextLarge,
} from "./styles";
import MaterialIcons from "material-icons-react";
import { color } from "../Pallate";

const CartDialog = (props) => {
  const { cartValue } = props;

  return (
    <Container>
      <Content>
        <BoxColumn>
          <TextLarge>{cartValue} Items | Rp. 250,000</TextLarge>
          <TextMedium>Termasuk ongkos kirim</TextMedium>
        </BoxColumn>
        <BoxRow>
          <MaterialIcons icon="shopping_cart" color={color.white} />
          <MaterialIcons icon="keyboard_arrow_right" color={color.white} />
        </BoxRow>
      </Content>
    </Container>
  );
};

export default CartDialog;
