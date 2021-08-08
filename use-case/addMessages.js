'use strict';
const HeroRepositoryFirebase = require('../repository/HeroRepositoryFirebase');

module.exports = (msg) => {
  return HeroRepositoryFirebase.addMessages(msg);
};