'use strict';

const firebase = require('../db');
const Question = require('../models/question');
const firestore = firebase.firestore();
const questionRepository = require('../models/questionRepository');


exports.questionRepository = async(QuestionId) => {

    console.log('Yannick ist toll!')
    await test1(QuestionId);

}

exports.get = async(QuestionId) => {
    const question = await firestore.collection('question').doc(QuestionId);
    const data = await question.get();
    
    console.log(data.data());
    return data;
}

exports.getAll = async() => {
    const questions = await firestore.collection('question');
    const data = await questions.get();
    const questionsArray = [];

    data.forEach(doc => {
        const question = new Question(
            doc.data().id,
            doc.data().question,
            doc.data().right,
            doc.data().wrong
        );
        questionsArray.push(question);
    });
    return questionsArray;
}