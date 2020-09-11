import React from "react";
import IconButton from "../IconButton";
import { NavCon, NavTitle, Caption, TitleAdd, Title } from "./styles";

const Navbar = () => {
  return (
    <>
      <NavCon>
        <IconButton
          color="#424749"
          icon="arrow_back"
          width="30px"
          height="30px"
        />
        <NavTitle>
          <Caption>ALAMAT PENGANTARAN</Caption>
          <TitleAdd>
            <Title>Tower BCA Sudirman</Title>
            <IconButton
              color="#f9423a"
              icon="expand_more"
              width="20px"
              height="20px"
            />
          </TitleAdd>
        </NavTitle>
      </NavCon>
    </>
  );
};

export default Navbar;
