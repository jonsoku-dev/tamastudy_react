import React from 'react';
import { withRouter, NavLink } from 'react-router-dom';

const DayContainer = ({
  history: { push },
  match: {
    params: { date }
  }
}) => {
  return (
    <div>
      <button type="button" onClick={() => push('/calendar')}>
        calendar
      </button>

      <NavLink to="/calendar">Calendar</NavLink>

      {date}
    </div>
  );
};

export default withRouter(DayContainer);
