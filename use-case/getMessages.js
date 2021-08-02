'use strict';
const HeroRepositoryFirebase = require('../repository/HeroRepositoryFirebase');

module.exports = () => {
    console.log('getMessagesUseCase');
    return HeroRepositoryFirebase.getMessages();
};