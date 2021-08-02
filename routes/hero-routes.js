const express = require('express');
const {getHero, getAllHeroes, deleteHero, updateHero, addHero, getMessages, clearMessages, addMessages
      } = require('../controllers/heroController');

const router = express.Router();

router.get('/hero/:id', getHero);
router.get('/heroes', getAllHeroes);
router.get('/hero/delete/', deleteHero);
router.get('/hero/update/:id', updateHero);
router.get('/hero/add/:id', addHero);
router.get('/messages/add', addMessages);
router.get('/messages/clear/', clearMessages);
router.get('/messages/get/', getMessages);


module.exports = {
    routes: router
}