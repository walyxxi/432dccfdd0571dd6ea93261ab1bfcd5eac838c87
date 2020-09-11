import style from "styled-components";

export const Container = style.div`
  display: flex;
  overflow-x: scroll;
  &::-webkit-scrollbar {
    width: 0px;
    background: transparent;
  }
`;

export const DateButtonActive = style.button`
  width: 40px;
  height: 40px;
  margin: 4px;
  cursor: pointer;
  background-color: #fff;
  border: 0;
  &:focus {
    outline: none;
    border: none;
  }
  &:hover {
    outline:0;
    background-color: #eee;
    border-radius: 24px;
  }
  &:active {
    color: black;
    background-color: #ddd;
    outline: 0;
    transition: none;
  }
`;

export const DateButtonDisabled = style.button`
  width: 40px;
  height: 40px;
  margin: 4px;
  color: #f1f1f2;
  background-color: #fff;
  border: 0;
`;

export const DayText = style.p`
  margin: 0;
  text-align: center;
  font-size: 8px;
  color: #6e7679;
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
  color: #424749;
`;

export const DateTextDisabled = style.p`
  margin: 0;
  font-size: 14px;
  font-weight: bold;
  text-align: center;
`;
