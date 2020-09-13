import styled from "styled-components";
import { color } from "../Pallate";

export const Nav = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  width: inherit;
  position: fixed;
  line-height: 1;
  padding: 12px 4px 0 4px;
  background-color: white;
  border-bottom: solid 1px ${color.lightGray};
`;

export const Box = styled.div`
  display: flex;
  flex-direction: row;
`;

export const NavTitle = styled.div`
  align-item: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  margin-left: 8px;
`;

export const Caption = styled.div`
  color: ${color.gray};
  flex: 1;
  font-size: 8px;
`;

export const Title = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;
  color: ${color.darkGray};
  font-size: 14px;
  font-weight: bold;
  margin-right: 4px;
`;
