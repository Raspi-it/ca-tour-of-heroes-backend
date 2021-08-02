'use strict';
const HeroRepositoryFirebase = require('../repository/HeroRepositoryFirebase');

module.exports = () => {
  console.log('getAllHeroesUseCase');
  return HeroRepositoryFirebase.getAllHeroes();
};