'use strict';
const HeroRepositoryFirebase = require('../repository/HeroRepositoryFirebase');

module.exports = () => {
    return HeroRepositoryFirebase.getMessages();
};