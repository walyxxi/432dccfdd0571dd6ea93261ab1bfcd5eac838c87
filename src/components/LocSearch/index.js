import React, { useState } from "react";
import styled from "styled-components";
import { color } from "../Pallate";
import MaterialIcon from "material-icons-react";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  position: fixed;
  bottom: 0;
  width: inherit;
  height: 100%;
  z-index: 1;
  background-color: rgba(0, 0, 0, 0.4);
`;

const Content = styled.div`
  height: 88%;
  overflow: auto;
  padding: 20px;
  background-color: ${color.white};
  border-radius: 12px 12px 0 0;
  line-heigth: 2;
`;

const CloseButton = styled.div`
  display: flex;
  justify-content: flex-end;
  cursor: pointer;
`;

const TextLarge = styled.div`
  font-size: 20px;
  font-weight: bold;
  color: ${color.darkGray};
  margin-bottom: 12px;
`;

const TextMediumBold = styled.div`
  font-size: 14px;
  font-weight: bold;
  color: ${color.darkGray};
`;

const TextMediumReg = styled.div`
  font-size: 12px;
  color: ${color.gray};
`;

const InputBox = styled.div`
  position: relative;
  margin-bottom: 12px;
`;

const IconInput = styled.div`
  position: absolute;
  top: 20%;
  left: 12px;
`;

const TextInput = styled.input`
  width: 100%;
  padding: 12px 12px 12px 50px;
  font-size: 14px;
  border: solid 1px ${color.lightGray};
  border-radius: 4px;
  color: ${color.darkGray};
  &:focus {
    outline: none;
  }
`;

const ListEl = styled.div`
  display: flex;
  align-items: center;
  padding: 12px;
`;

const ListIcon = styled.div`
  display: flex;
  align-items: center;
  background-color: ${color.outlineGray};
  border-radius: 50%;
`;

const ListText = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 16px;
`;

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
    <Container onClick={handleCloseSearch}>
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
