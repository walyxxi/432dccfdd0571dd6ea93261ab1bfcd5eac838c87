import React from "react";
import IconButton from "../IconButton";
import { Nav, Box, NavTitle, Caption, Title } from "./styles";
import { color } from "../Pallate";
import DateScroll from "../DateScroll";

const Navbar = () => {
  return (
    <Nav>
      <Box>
        <IconButton
          color={color.darkGray}
          icon="arrow_back"
          width="30px"
          height="30px"
        />
        <NavTitle>
          <Caption>ALAMAT PENGANTARAN</Caption>
          <Title>
            Tower BCA Sudirman
            <IconButton
              color={color.red}
              icon="expand_more"
              width="20px"
              height="20px"
            />
          </Title>
        </NavTitle>
      </Box>
      <Box>
        <DateScroll />
      </Box>
    </Nav>
  );
};

export default Navbar;
