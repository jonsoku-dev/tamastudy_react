import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import styled from 'styled-components';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const CalendarWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-auto-rows: 50px;
  font-family: 'Poppins', sans-serif;
`;

const Day = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  &:nth-of-type(7n + 1) {
    color: red;
  }
  &:nth-of-type(7n) {
    color: blue;
  }
`;

const DayLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const WeekName = styled(Day)`
  background-color: #c9b6be;
  font-weight: 700;
`;

const TopWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;
const YearBox = styled.div`
  font-size: 2.2rem;
`;
const ArrowBox = styled.div`
  margin: 1rem 0;
  display: grid;
  width: 100%;
  grid-template-columns: 5fr 90fr 5fr;
  justify-items: center;
  > div:not(:nth-of-type(2)) {
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  > div:nth-of-type(2) {
    font-size: 2rem;
  }
`;

const CalendarPresenter = ({ CalendarTitle, buildCalendar, year, month, moveMonth, dummy: { data } }) => {
  const CalendarTop = () => {
    return (
      <TopWrapper>
        <YearBox>{year}</YearBox>
        <ArrowBox>
          <div onClick={() => moveMonth('prev')}>
            <FontAwesomeIcon icon={faChevronLeft} style={{ color: '#333' }} />
          </div>
          <div>{month + 1}</div>
          <div onClick={() => moveMonth('next')}>
            <FontAwesomeIcon icon={faChevronRight} style={{ color: '#333' }} />
          </div>
        </ArrowBox>
      </TopWrapper>
    );
  };

  // 아 ~ 뭔가 이상하네....
  const DayString = () => CalendarTitle().map((t, i) => <WeekName key={i}>{t}</WeekName>);
  const DayNumber = () =>
    buildCalendar().map((d, i) => (
      <Day key={i}>
        <DayLink to={`/calendar/${d}`}>{d !== 0 ? d : ''}</DayLink>
      </Day>
    ));

  // dummy data에 넣어야한다?

  return (
    <>
      <div>{data && data.map((d, i) => console.log(d))}</div>
      {CalendarTop()}
      <CalendarWrapper>
        {DayString()}
        {DayNumber()}
      </CalendarWrapper>
    </>
  );
};

export default CalendarPresenter;
