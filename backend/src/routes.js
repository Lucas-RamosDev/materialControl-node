const express = require('express');

const UserController = require('./controllers/UserController')

const routes = express.Router();

routes.post('/users', UserController.create); // - cadastra novo usuario
routes.get('/users', UserController.index); // - Lista os usuários cadastrados

module.exports = routes;