const express = require('express');
const {getHero, getAllHeroes, deleteHero, updateHero, addHero, getMessages, clearMessages, addMessages
      } = require('../controllers/heroController');

const router = express.Router();

router.get('/hero/:id', getHero);
router.get('/heroes', getAllHeroes);
router.get('/messages/clear/', clearMessages);
router.get('/messages/get/', getMessages);

router.post('/messages/add', addMessages);
router.post('/hero/delete/', deleteHero);

router.put('/hero/add', addHero);
router.put('/hero/update', updateHero);

module.exports = {
    routes: router
}