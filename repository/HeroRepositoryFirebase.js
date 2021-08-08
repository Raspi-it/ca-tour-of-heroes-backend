'use strict';

const firebase = require('../db');
const Hero = require('../models/hero');
const firestore = firebase.firestore();
var messages = [];

exports.getHero = async(HeroId) => {
    const hero = await firestore.collection('heroes').doc(HeroId);
    const data = await hero.get();
    
    console.log(data.data());
    return data;
}

exports.getAllHeroes = async() => {
    const heroes = await firestore.collection('heroes');
    const data = await heroes.get();
    const heroesArray = [];

    data.forEach(doc => {
        const hero = new Hero(
            doc.data().id,
            doc.data().name
        );
        heroesArray.push(hero);
    });

    console.log(heroesArray);
    return heroesArray;
}

exports.deleteHero = async(HeroId) => {
    await firestore.collection('heroes').doc(HeroId).delete();
}

exports.updateHero = async(HeroId, HeroName) => {
    const ref = firestore.collection('heroes').doc(HeroId);

    const res = await ref.update({name: HeroName});
    console.log('Updated Hero with ID: ', res.id);
    return getHero(HeroId);
}

exports.addHero = async(id, name) => {

    var docId = "" + id;

    await firestore.collection('heroes').doc(docId).set({id: id, name: name});
}

exports.getMessages = async() => {
    return messages;
}

exports.clearMessages = async() => {
    messages.length = 0;
    return messages;
}

exports.addMessages = async(msg) => {
    messages.push('HeroService: '+msg);
}