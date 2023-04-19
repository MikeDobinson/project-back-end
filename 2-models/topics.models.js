const db = require('../db/connection');

exports.fetchAllTopics = () => {
  console.log('inside fetchAllTopics');
  return db.query('SELECT * FROM topics;').then((topics) => {
    return topics.rows;
  });
};
