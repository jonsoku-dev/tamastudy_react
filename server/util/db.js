const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

const mongoConnect = callback => {
  MongoClient.connect(
    `mongodb+srv://the2792:!canyou12@devconnector-jy5dk.mongodb.net/test?retryWrites=true&w=majority
        Copy`,
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
    .then(result => {
      console.log('MongoDB altas connect successful! (util/db.js)');
      callback(result);
    })
    .catch(err => {
      console.log(err);
    });
};

module.exports = mongoConnect;
