'use strict';
//const QuestionRepositoryFirebase = require('../repository/QuestionRepositoryFirebase');

module.exports = (QuestionId, QuestionRepositoryFirebase) => {

  console.log('Die laufenden Zombies!');
  return QuestionRepositoryFirebase.get(QuestionId);
};