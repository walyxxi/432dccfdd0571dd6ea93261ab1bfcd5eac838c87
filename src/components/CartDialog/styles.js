import styled from "styled-components";
import { color } from "../Pallate";

export const Container = styled.div`
  position: fixed;
  padding: 12px 12px 16px 12px;
  bottom: 0;
  width: inherit;
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${color.white};
  padding: 8px 8px 8px 12px;
  background-color: ${color.brown};
  border-radius: 4px;
`;

export const BoxColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-item: center;
`;

export const BoxRow = styled.div`
  display: flex;
  align-item: center;
`;

export const TextLarge = styled.div`
  font-size: 14px;
  font-weight: bold;
`;

export const TextMedium = styled.div`
  font-size: 12px;
`;
