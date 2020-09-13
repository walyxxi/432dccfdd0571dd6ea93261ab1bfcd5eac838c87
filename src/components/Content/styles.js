import styled from "styled-components";
import { color } from "../Pallate";

export const Container = styled.div`
  margin-top: 90px;
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0 16px 0 16px;
  overflow-y: auto;
`;

export const DateText = styled.div`
  color: ${color.darkGray};
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 12px;
`;
