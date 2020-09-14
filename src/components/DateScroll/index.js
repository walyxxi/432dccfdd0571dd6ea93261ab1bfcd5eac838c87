import React from "react";
import moment from "moment";
import {
  Container,
  DateButtonActive,
  DateButtonDisabled,
  DateText,
  DateTextDisabled,
  DayTextDisabled,
  DayText,
} from "./styles";
import { get2WeekForwardDate } from "./helpers";

const DateScroll = (props) => {
  const { dateSelected, setDateSelected } = props;
  const dateActive = (d) => {
    return new Date(dateSelected).getDate() === new Date(d).getDate()
      ? true
      : false;
  };

  const handleClick = (d) => {
    setDateSelected(d);
  };

  return (
    <Container>
      {get2WeekForwardDate &&
        get2WeekForwardDate().map((date, idx) => (
          <div key={idx}>
            {moment(date).format("ddd") === "Sat" ||
            moment(date).format("ddd") === "Sun" ? (
              <DateButtonDisabled disabled>
                <DayTextDisabled>
                  {moment(date).format("ddd").toUpperCase()}
                </DayTextDisabled>
                <DateTextDisabled>{moment(date).format("DD")}</DateTextDisabled>
              </DateButtonDisabled>
            ) : (
              <DateButtonActive
                active={dateActive(date)}
                onClick={() => handleClick(date)}
              >
                <DayText active={dateActive(date)}>
                  {moment(date).format("ddd").toUpperCase()}
                </DayText>
                <DateText active={dateActive(date)}>
                  {moment(date).format("DD")}
                </DateText>
              </DateButtonActive>
            )}
          </div>
        ))}
    </Container>
  );
};

export default DateScroll;
