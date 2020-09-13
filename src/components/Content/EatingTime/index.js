import React from "react";
import { GroupButton, ButtonActive, ButtonDisabled } from "./styles";

const EatingTime = () => {
  return (
    <GroupButton>
      <ButtonActive>Lunch</ButtonActive>
      <ButtonDisabled disabled>Dinner</ButtonDisabled>
    </GroupButton>
  );
};

export default EatingTime;
