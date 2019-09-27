const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const calendarSchema = new Schema(
  {
    year: {
      type: Number,
      required: true,
    },
    date: {
      type: Number,
      required: true,
    },
    todo: [
      {
        type: String,
      },
    ],
  },
  {
    writeConcern: {
      w: 'majority',
      j: true,
      wtimeout: 1000,
    },
  },
);

module.exports = mongoose.model('Calendar', calendarSchema);
