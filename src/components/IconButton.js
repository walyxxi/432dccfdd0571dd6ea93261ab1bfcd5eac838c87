import React from "react";
import MaterialIcon from "material-icons-react";
import style from "styled-components";

const IconButton = ({ color, icon, width, height }) => {
  const Button = style.button`
    display: flex;
    cursor: pointer;
    align-items: center;
    justify-content: center;
    width: ${width};
    height: ${height};
    background-color: #fff;
    padding: 0;
    border: 0;
    &:focus {
      outline: none;
      border: none;
    }
    &:hover {
      outline:0;
      background-color: #eee;
      border-radius: 20px;
    }
    &:active {
      color: black;
      background-color: #ddd;
      outline: 0;
      transition: none;
    }
  `;

  return (
    <Button>
      <MaterialIcon color={color} icon={icon} />
    </Button>
  );
};

export default IconButton;
