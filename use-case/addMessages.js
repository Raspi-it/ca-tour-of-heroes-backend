'use strict';
const HeroRepositoryFirebase = require('../repository/HeroRepositoryFirebase');

module.exports = (msg) => {
    console.log('AddMessagesUseCase');
  return HeroRepositoryFirebase.addMessages(msg);
};