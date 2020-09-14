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

export const Button = styled.a`
  width: 50%;
  cursor: ${({ disabled }) => (disabled ? "pointer" : "disabled")};
  color: ${({ disabled }) => (disabled ? color.white : color.gray)};
  text-align: center;
  font-size: 12px;
  padding: 8px;
  background-color: ${({ disabled }) =>
    disabled ? color.darkGray : color.white};
`;

export const ButtonDisabled = styled.a`
  width: 50%;
  color: ${color.gray};
  text-align: center;
  font-size: 12px;
  padding: 8px;
`;
