'use strict';
const HeroRepositoryFirebase = require('../repository/HeroRepositoryFirebase');

module.exports = (HeroId) => {
  console.log('getHeroUseCase');
  return HeroRepositoryFirebase.getHero(HeroId);
};