import styled from "styled-components";
import { color } from "../../Pallate";

export const CardMedia = styled.div`
  width: 100%;
  box-shadow: 0 8px 10px 0 rgba(10, 31, 68, 0.1);
  border-radius: 12px;
  align-items: center;
  overflow: hidden;
  margin-bottom: 16px;
`;

export const CardImage = styled.img`
  width: inherit;
`;

export const CardCaption = styled.div`
  padding: 4px 14px 14px 14px;
  line-height: 1.5;
`;

export const FoodStart = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const StartValue = styled.div`
  color: ${color.gray};
  font-size: 12px;
  font-weight: bold;
  margin-right: 4px;
`;

export const TextDark = styled.div`
  color: ${color.darkGray};
  font-size: 14px;
  font-weight: bold;
`;

export const TextGray = styled.div`
  color: ${color.gray};
  font-size: 10px;
`;

export const CardFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 8px;
`;

export const ButtonAdd = styled.button`
  display: flex;
  font-size: 12px;
  align-items: center;
  justify-content: center;
  color: ${color.white};
  background-color: ${color.red};
  width: 70px;
  height: 30px;
  border-radius: 4px;
  text-align: center;
  border: 0;
  cursor: pointer;
  &:focus {
    outline: none;
    border: none;
  }
  &:hover {
    background-color: ${color.brown};
  }
`;
