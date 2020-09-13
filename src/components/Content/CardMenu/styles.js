import style from "styled-components";

export const CardMedia = style.div`
  width: 100%;
  box-shadow: 0 8px 10px 0 rgba(10, 31, 68, 0.1);
  border-radius: 12px;
  align-items: center;
  overflow: hidden;
`;

export const CardImage = style.img`
  width: 100%;
`;

export const CardCaption = style.div`
  padding: 4px 14px 12px 14px;
`;
