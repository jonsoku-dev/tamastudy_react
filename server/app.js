const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
// const mongoConnect = require('./util/db');
const app = express();
require('dotenv').config();
const PORT = process.env.PORT;
const userRoutes = require('./routes/user');
const calendarRoutes = require('./routes/calendar');

// middleware
app.use(
  bodyParser.urlencoded({
    extended: true,
  }),
);
app.use(bodyParser.json());
// routes
app.use('/api/user', userRoutes);
app.use('/api/calendar', calendarRoutes);

// 그냥 몽고db만 쓸때

// mongoConnect(client => {
//   if (client) {
//     console.log('몽고 DB에 연결되었습니다. ');
//   }
//   app.listen(PORT || 8000, () => {
//     console.log(`현재 ${PORT}번 포트로 연결되었습니다. (app.js)`);
//   });
// });

// 몽구스랑 같이 쓸때

mongoose
  .connect(
    `mongodb+srv://the2792:!canyou12@devconnector-jy5dk.mongodb.net/test?retryWrites=true&w=majority
Copy`,
    { useUnifiedTopology: true, useNewUrlParser: true },
  )
  .then(() => {
    app.listen(PORT || 8000, () => {
      console.log(`현재 ${PORT}번 포트로 연결되었습니다. (app.js)`);
      console.log('MongoDB altas connect successful with mongoose! (app.js)');
    });
  })
  .catch(err => console.error(err));
