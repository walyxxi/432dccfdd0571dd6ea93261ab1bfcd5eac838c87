import style from "styled-components";
import { color } from "../Pallate";

export const Container = style.div`
  margin-top: 90px;
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0 12px 12px 12px;
  overflow-y: auto;
`;

export const DateText = style.div`
  color: ${color.darkGray};
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 12px;
`;
