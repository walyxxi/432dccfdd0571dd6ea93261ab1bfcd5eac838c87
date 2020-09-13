import styled from "styled-components";
import { color } from "../Pallate";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 90px;
  padding: 0 16px 0 16px;
  overflow-y: auto;
`;

export const DateText = styled.div`
  color: ${color.darkGray};
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 12px;
`;

export const BoxMargin = styled.div`
  margin-bottom: 70px;
`;
