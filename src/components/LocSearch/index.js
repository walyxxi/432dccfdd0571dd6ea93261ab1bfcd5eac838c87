import React, { useState } from "react";
import MaterialIcon from "material-icons-react";
import {
  Container,
  Content,
  CloseButton,
  TextLarge,
  InputBox,
  IconInput,
  ListEl,
  ListIcon,
  ListText,
  TextInput,
  TextMediumBold,
  TextMediumReg,
} from "./styles";
import { color } from "../Pallate";

const LocSearch = (props) => {
  const { setLocSearchToggle } = props;
  const [inputVal, setInputVal] = useState("");

  const handleCloseSearch = () => {
    setLocSearchToggle(false);
  };

  const handleChange = (e) => {
    setInputVal(e.target.value);
  };

  return (
    <Container>
      <Content>
        <CloseButton onClick={handleCloseSearch}>
          <MaterialIcon icon="clear" color={color.darkGray} />
        </CloseButton>
        <TextLarge>Cek makanan yang tersedia di lokasi kamu!</TextLarge>
        <InputBox>
          <TextInput type="text" onChange={handleChange} value={inputVal} />
          <IconInput>
            <MaterialIcon icon="location_on" color={color.red} />
          </IconInput>
        </InputBox>
        {inputVal.length >= 3 && (
          <>
            <ListEl>
              <ListIcon>
                <MaterialIcon icon="location_on" color={color.gray} />
              </ListIcon>
              <ListText>
                <TextMediumBold>Kulina</TextMediumBold>
                <TextMediumReg>
                  Jl. Tulodong Atas 28, Senayan, Kebayoran Ba...
                </TextMediumReg>
              </ListText>
            </ListEl>
            <ListEl>
              <ListIcon>
                <MaterialIcon icon="location_on" color={color.gray} />
              </ListIcon>
              <ListText>
                <TextMediumBold>Kuliner Jalanan</TextMediumBold>
                <TextMediumReg>
                  Jl. Tulodong Atas 40, Senayan, Kebayoran Ba...
                </TextMediumReg>
              </ListText>
            </ListEl>
          </>
        )}
      </Content>
    </Container>
  );
};

export default LocSearch;
