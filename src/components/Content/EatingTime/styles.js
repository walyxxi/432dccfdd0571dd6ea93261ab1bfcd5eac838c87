import styled from "styled-components";
import { color } from "../../Pallate";

export const GroupButton = styled.div`
  width: 100%;
  margin-top: 12px;
  margin-bottom: 32px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  border: solid 1px ${color.lightGray};
  border-radius: 6px;
  overflow: hidden;
`;

export const ButtonActive = styled.a`
  width: 50%;
  cursor: pointer;
  color: white;
  text-align: center;
  font-size: 12px;
  padding: 8px;
  background-color: #424749;
  &:hover {
    outline: 0;
    background-color: black;
  }
`;

export const ButtonDisabled = styled.a`
  width: 50%;
  color: #6e7679;
  text-align: center;
  font-size: 12px;
  padding: 8px;
`;
