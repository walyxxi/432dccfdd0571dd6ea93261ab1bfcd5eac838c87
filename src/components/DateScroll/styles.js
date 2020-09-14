import styled from "styled-components";
import { color } from "../Pallate";

export const Container = styled.div`
  display: flex;
  overflow-x: scroll;
  margin: 0 14px;
  &::-webkit-scrollbar {
    height: 0;
    background: transparent;
  }
`;

export const DateButtonActive = styled.button`
  width: 40px;
  height: 40px;
  margin: 4px;
  cursor: pointer;
  background-color: ${({ active }) => (active ? color.darkGray : color.white)};
  border-radius: 50%;
  border: 0;
  &:focus {
    outline: none;
    border: none;
  }
`;

export const DateButtonDisabled = styled.button`
  width: 40px;
  height: 40px;
  margin: 4px;
  border-radius: 50%;
  color: ${color.lightGray};
  background-color: #fff;
  border: 0;
`;

export const DayText = styled.p`
  margin: 0;
  text-align: center;
  font-size: 8px;
  color: ${({ active }) => (active ? color.outlineGray : color.gray)};
`;

export const DayTextDisabled = styled.p`
  margin: 0;
  text-align: center;
  font-size: 8px;
`;

export const DateText = styled.p`
  margin: 0;
  font-size: 14px;
  font-weight: bold;
  text-align: center;
  color: ${({ active }) => (active ? color.white : color.darkGray)};
`;

export const DateTextDisabled = styled.p`
  margin: 0;
  font-size: 14px;
  font-weight: bold;
  text-align: center;
`;
