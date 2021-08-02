'use strict';
const HeroRepositoryFirebase = require('../repository/HeroRepositoryFirebase');

module.exports = (HeroId) => {
  console.log('DeleteHeroUseCase');
  return HeroRepositoryFirebase.deleteHero(HeroId);
};