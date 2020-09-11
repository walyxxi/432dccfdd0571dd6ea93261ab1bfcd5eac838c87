import React from "react";
import style from "styled-components";
import moment from "moment";
import { get2WeekForwardDate } from "./helpers";

const Container = style.div`
  display: flex;
  align-items: stretch;
  align-content: stretch;
  justifu-content: center;
  max-width: 375px;
  padding: 0 12px;
  overflow-x: scroll;
`;

const DateEl = style.button`
  margin: 5px 0;
`;

const DateScroll = () => {
  return (
    <Container>
      {get2WeekForwardDate &&
        get2WeekForwardDate().map((date, idx) => (
          <DateEl key={idx}>{moment(date).format("ddd, DD")}</DateEl>
        ))}
    </Container>
  );
};

export default DateScroll;
