import style from "styled-components";
import { color } from "../Pallate";

export const Nav = style.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  width: 375px;
  position: fixed;
  line-height: 1;
  padding-top: 12px;
  background-color: white;
  border-bottom: solid 1px ${color.lightGray};
`;

export const Box = style.div`
  display: flex;
  flex-direction: row;
`;

export const NavTitle = style.div`
  align-item: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  margin-left: 8px;
`;

export const Caption = style.div`
  color: ${color.gray};
  flex: 1;
  font-size: 8px;
`;

export const Title = style.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;
  color: ${color.darkGray};
  font-size: 14px;
  font-weight: bold;
  margin-right: 4px;
`;
