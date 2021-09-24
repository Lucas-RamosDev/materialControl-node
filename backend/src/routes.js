const express = require('express');

const UserController = require('./controllers/UserController')
const ItemController = require('./controllers/ItemController')
const SessionController = require('./controllers/SessionController')

const routes = express.Router();

routes.post('/sessions', SessionController.create); // - criando uma seção

routes.post('/users', UserController.create); // - cadastra novo usuario
routes.get('/users', UserController.index); // - Lista os usuários cadastrados


routes.post('/items', ItemController.create);
routes.get('/items', ItemController.index);
routes.delete('/items/:id', ItemController.delete)


module.exports = routes;