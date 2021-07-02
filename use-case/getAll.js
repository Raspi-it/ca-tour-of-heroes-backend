'use strict';
const QuestionRepositoryFirebase = require('../repository/QuestionRepositoryFirebase')

module.exports = () => {
  return QuestionRepositoryFirebase.getAll();
};