'use strict';
const HeroRepositoryFirebase = require('../repository/HeroRepositoryFirebase');

module.exports = (HeroId) => {
  return HeroRepositoryFirebase.deleteHero(HeroId);
};