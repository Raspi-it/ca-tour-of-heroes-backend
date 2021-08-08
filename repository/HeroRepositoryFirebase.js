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
    await db.collection('heroes').doc(HeroId).delete();
    console.log('tried to delete!');
}

exports.updateHero = async(HeroId, HeroName) => {
    const ref = db.collection('heroes').doc(HeroId);

    const res = await ref.update({name: HeroName});
    console.log('Updated Hero with ID: ', res.id);
    return getHero(HeroId);
}

exports.addHero = async(id, name) => {
    const res = await db.collection('heroes').doc(id).add({id: id, name: name});
    console.log('Added Hero with ID: ', res.id);
    return getHero(id);
}

exports.getMessages = async() => {
    return messages;
}

exports.clearMessages = async() => {
    messages.length = 0;
    console.log(messages);
    return messages;
}

exports.addMessages = async(msg) => {
    messages.push(msg);
}