import React, { useState, useEffect } from 'react';
import CalendarPresenter from './CalendarPresenter';
import axios from 'axios';

const CalendarContainer = props => {
  useEffect(() => {
    fetchDummyData();
  }, []);

  let Calendar = new Date();

  const [year, setYear] = useState(Calendar.getFullYear());
  const [month, setMonth] = useState(Calendar.getMonth());
  const [date, setDate] = useState(Calendar.getDate());
  const [dummy, setDummy] = useState([]);

  Calendar = new Date(year, month, date);

  const moveMonth = btn => {
    if (btn === 'prev') {
      if (month > 0) {
        setMonth(month - 1);
      } else if (month === 0) {
        setMonth(11);
        setYear(year - 1);
      }
    } else if (btn === 'next') {
      if (month < 11) {
        setMonth(month + 1);
      } else if (month === 11) {
        setMonth(0);
        setYear(year + 1);
      }
    }
  };

  const fetchDummyData = async () => {
    try {
      await axios.get('Dummy/schedule.json').then(res =>
        setDummy({
          ...dummy,
          data: res.data.data
        })
      );
    } catch (error) {
      console.error(error);
    }
  };

  const buildCalendar = (test = month) => {
    const firstDate = new Date(Calendar.getFullYear(), Calendar.getMonth(), 1).getDate();
    const lastDate = new Date(Calendar.getFullYear(), test + 1, 0).getDate();

    const firstDay = new Date(Calendar.getFullYear(), test, 1).getDay();
    const lastDay = new Date(Calendar.getFullYear(), Calendar.getMonth() + 1, 0).getDay();

    let allDays = [];

    for (let i = 0; i < firstDay; i++) {
      allDays.push(0);
    }

    for (let i = firstDate; i <= lastDate; i++) {
      allDays.push(i);
    }
    return allDays;
  };

  const CalendarTitle = () => {
    const WeekNames = ['일', '월', '화', '수', '목', '금', '토'];
    console.log(WeekNames);
    return WeekNames;
  };

  return (
    <>
      <CalendarPresenter
        year={year}
        month={month}
        moveMonth={moveMonth}
        CalendarTitle={CalendarTitle}
        buildCalendar={buildCalendar}
        dummy={dummy}
      ></CalendarPresenter>
    </>
  );
};

export default CalendarContainer;
