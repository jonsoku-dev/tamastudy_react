const Calendar = require('../models/Calendar');

exports.getDays = (req, res, next) => {
  console.log(`hey!`);
  res.send('hey');
};

exports.postAddCalendar = async (req, res, next) => {
  const { year, date, todo } = req.body;
  const calendar = new Calendar({
    year,
    date,
    todo,
  });
  try {
    await calendar.save();
    res.status(201).send({ calendar });
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error!');
  }
};
