const express = require('express');
const {getQuestion, getAllQuestions
      } = require('../controllers/questionController');

const router = express.Router();

router.get('/question/:id', getQuestion);
router.get('/question', getAllQuestions);


module.exports = {
    routes: router
}