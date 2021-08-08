'use strict';

const GetHero = require('../use-case/getHero');
const GetAllHeroes = require('../use-case/getAllHeroes');
const UpdateHero = require('../use-case/updateHero');
const DeleteHero = require('../use-case/deleteHero');
const GetMessages = require('../use-case/getMessages');
const ClearMessages = require('../use-case/clearMessages');
const AddMessages = require('../use-case/addMessages');

module.exports = {
    async getHero(req, res){

            const id = req.params.id;
            const hero = await GetHero(id)
            console.log('getHeroController');
            if(!hero.exists) {
                res.status(404).send('Hero with the given ID not found');
            }else {
                res.send(hero.data());
            }
    },

    async getAllHeroes(req, res){
        const allHeroes = await GetAllHeroes();
        console.log('getAllHeroesController');
        if(!allHeroes){
            return res.status(400).send(error.message)
        }

        res.send(allHeroes);
    },

    async updateHero(req, res) {
        const id = req.params.id;
        const new_name = req.params.new_name;
        const hero = await GetHero(id)
        console.log('updateHeroController');
        if(hero.exists) {
            const hero = await UpdateHero(id, new_name)
            res.send(hero.data());
        }else {
            //res.send(hero.data());
            res.status(404).send('Hero with the given ID not found');
        }
    },

    async addHero(req, res) {
        const id = req.params.id;
        const name = req.params.name;
        console.log('addHeroController');
        if(id) {
            const hero = await AddHero(id, name);
            res.send(hero.data());
        } else {
            res.status(404).send('Message could not be added');
        }
    },

    async deleteHero(req, res) {
        const id = req.params.id;
        console.log('deleteHeroController');
        if(hero.exists) {
            const del = await DeleteHero(id, HeroRepositoryFirebase)
            res.send(del.data());
        }else {
            res.status(404).send('Hero with the given ID not found');
        }
    },

    async addMessages(req, res) {
        const msg = req.body.msg;
        if(msg) {
            await AddMessages(msg);
        } else {
            res.status(404).send('Message could not be added');
        }
    },

    async getMessages(req, res) {
        const allMessages = await GetMessages();

        if(!allMessages){
            return res.status(400).send(error.message)
        }

        res.send(allMessages);
    },

    async clearMessages(req, res) {
        const clearMessages = await ClearMessages();
        console.log('clearMessagesController');

        res.send(clearMessages);
    }
}
