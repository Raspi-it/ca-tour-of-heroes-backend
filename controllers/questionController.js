'use strict';

const firebase = require('../db');
const GetQuestion = require('../use-case/get');
const GetAllQuestions = require('../use-case/getAll');
const QuestionRepositoryFirebase = require('../repository/QuestionRepositoryFirebase');

module.exports = {
    async getQuestion(req, res){

            const id = req.params.id;
            console.log(QuestionRepositoryFirebase);
            const question = await GetQuestion(id, QuestionRepositoryFirebase)

            if(!question.exists) {
                res.status(404).send('Question with the given ID not found');
            }else {
                res.send(question.data());
            }
    },

    async getAllQuestions(req, res){
        const allQuestions = await GetAllQuestions();

        if(!allQuestions){
            return res.status(400).send(error.message)
        }

        res.send(allQuestions);
    }
}
