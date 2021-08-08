'use strict';
const HeroRepositoryFirebase = require('../repository/HeroRepositoryFirebase');

module.exports = (id, name) => {
  return HeroRepositoryFirebase.addHero(id, name);
};