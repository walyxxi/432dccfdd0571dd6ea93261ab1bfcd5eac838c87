import styled from "styled-components";
import { color } from "../Pallate";

export const Container = styled.div`
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

export const Content = styled.div`
  height: 87%;
  overflow: auto;
  padding: 20px;
  background-color: ${color.white};
  border-radius: 12px 12px 0 0;
  line-heigth: 2;
`;

export const CloseButton = styled.div`
  display: flex;
  justify-content: flex-end;
  cursor: pointer;
`;

export const TextLarge = styled.div`
  font-size: 20px;
  font-weight: bold;
  color: ${color.darkGray};
  margin-bottom: 12px;
`;

export const TextMediumBold = styled.div`
  font-size: 14px;
  font-weight: bold;
  color: ${color.darkGray};
`;

export const TextMediumReg = styled.div`
  font-size: 12px;
  color: ${color.gray};
`;

export const InputBox = styled.div`
  position: relative;
  margin-bottom: 12px;
`;

export const IconInput = styled.div`
  position: absolute;
  top: 20%;
  left: 12px;
`;

export const TextInput = styled.input`
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

export const ListEl = styled.div`
  display: flex;
  align-items: center;
  padding: 12px;
`;

export const ListIcon = styled.div`
  display: flex;
  align-items: center;
  background-color: ${color.outlineGray};
  border-radius: 50%;
`;

export const ListText = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 16px;
`;
