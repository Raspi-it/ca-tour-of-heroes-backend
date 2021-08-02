'use strict';
const HeroRepositoryFirebase = require('../repository/HeroRepositoryFirebase');

module.exports = (hero) => {
    console.log('addHeroUseCase');
  return HeroRepositoryFirebase.addHero(hero);
};