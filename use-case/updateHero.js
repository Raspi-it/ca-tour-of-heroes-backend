'use strict';
const HeroRepositoryFirebase = require('../repository/HeroRepositoryFirebase');

module.exports = (name, HeroId) => {
  console.log('updateHeroUseCase');
  return HeroRepositoryFirebase.updateHero(name, HeroId);
};