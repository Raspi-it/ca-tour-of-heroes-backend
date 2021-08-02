'use strict';
const HeroRepositoryFirebase = require('../repository/HeroRepositoryFirebase');

module.exports = () => {
    console.log('clearMessagesUseCase');
  return HeroRepositoryFirebase.clearMessages();
};