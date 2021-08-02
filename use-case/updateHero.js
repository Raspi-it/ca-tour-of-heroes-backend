'use strict';
const HeroRepositoryFirebase = require('../repository/HeroRepositoryFirebase');

module.exports = (HeroId) => {
  console.log('updateHeroUseCase');
  return HeroRepositoryFirebase.updateHero(HeroId);
};