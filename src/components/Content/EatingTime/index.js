import React from "react";
import { GroupButton, Button } from "./styles";

const EatingTime = (props) => {
  const { eatTime, setEatTime } = props;

  const handleClick = (d) => {
    setEatTime(d);
  };

  return (
    <GroupButton>
      <Button
        disabled={eatTime === "Lunch" ? false : true}
        onClick={() => handleClick("Lunch")}
      >
        Lunch
      </Button>
      <Button
        disabled={eatTime === "Dinner" ? false : true}
        onClick={() => handleClick("Dinner")}
      >
        Dinner
      </Button>
    </GroupButton>
  );
};

export default EatingTime;
