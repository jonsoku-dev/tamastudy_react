const express = require('express');
const router = express.Router();
const calendarController = require('../controller/calendar');

router.get('/', calendarController.getDays);
// router.post('/save', calendarController.postAddCalendar);
router.post('/', calendarController.postAddCalendar);

module.exports = router;
