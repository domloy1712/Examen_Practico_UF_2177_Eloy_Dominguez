const express = require('express');
const Router = express.Router();
const Categoriascontroller = require('../controller/CategoriasController')

Router.get('/', Categoriascontroller.mostrar);
Router.get('/:id', Categoriascontroller.mostrarid);
Router.post('/', Categoriascontroller.crear);

Router.delete('/:id',Categoriascontroller.borrar);

module.exports = Router;