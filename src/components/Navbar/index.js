import React from "react";
import IconButton from "../IconButton";
import { Nav, Box, NavTitle, Caption, Title } from "./styles";
import { color } from "../Pallate";
import DateScroll from "../DateScroll";

const Navbar = (props) => {
  const { setLocSearchToggle, dateSelected, setDateSelected } = props;

  const handleOpenSearch = () => {
    setLocSearchToggle(true);
  };

  return (
    <Nav>
      <Box>
        <IconButton
          color={color.darkGray}
          icon="arrow_back"
          width="30px"
          height="30px"
        />
        <NavTitle onClick={handleOpenSearch}>
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
        <DateScroll
          dateSelected={dateSelected}
          setDateSelected={setDateSelected}
        />
      </Box>
    </Nav>
  );
};

export default Navbar;
