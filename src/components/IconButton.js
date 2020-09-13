import React from "react";
import MaterialIcon from "material-icons-react";
import styled from "styled-components";
import { color } from "./Pallate";

const clr = color;

const IconButton = ({ color, icon, width, height }) => {
  const Button = styled.a`
    display: flex;
    cursor: pointer;
    align-items: center;
    justify-content: center;
    width: ${width};
    height: ${height};
    border-radius: 50%;
    padding: 0;
    border: 0;
    &:hover {
      background-color: ${clr.outlineGray};
    }
    &:focus {
      outline: none;
    }
    &:active {
      outline: none;
      color: black;
      background-color: ${clr.lightGray};
    }
  `;

  return (
    <Button>
      <MaterialIcon color={color} icon={icon} />
    </Button>
  );
};

export default IconButton;
