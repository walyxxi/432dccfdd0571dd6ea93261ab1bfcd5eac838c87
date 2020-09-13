import style from "styled-components";
import { color } from "../Pallate";

export const Container = style.div`
  display: flex;
  overflow-x: scroll;
  margin: 0 12px;
  &::-webkit-scrollbar {
    height: 0;
    background: transparent;
  }
`;

export const DateButtonActive = style.button`
  width: 40px;
  height: 40px;
  margin: 4px;
  cursor: pointer;
  background-color: ${color.white};
  border-radius: 50%;
  border: 0;
  &:focus {
    outline: none;
    border: none;
  }
  &:hover {
    outline: 0;
    background-color: ${color.outlineGray};
  }
  &:active {
    color: black;
    background-color: ${color.lightGray};
    outline: 0;
    transition: none;
  }
`;

export const DateButtonDisabled = style.button`
  width: 40px;
  height: 40px;
  margin: 4px;
  border-radius: 50%;
  color: ${color.lightGray};
  background-color: #fff;
  border: 0;
`;

export const DayText = style.p`
  margin: 0;
  text-align: center;
  font-size: 8px;
  color: ${color.gray};
`;

export const DayTextDisabled = style.p`
  margin: 0;
  text-align: center;
  font-size: 8px;
`;

export const DateText = style.p`
  margin: 0;
  font-size: 14px;
  font-weight: bold;
  text-align: center;
  color: ${color.darkGray};
`;

export const DateTextDisabled = style.p`
  margin: 0;
  font-size: 14px;
  font-weight: bold;
  text-align: center;
`;
