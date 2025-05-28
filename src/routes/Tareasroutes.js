const express = require('express');
const Router = express.Router();
const Tareascontroller = require('../controller/TareasController')

Router.get('/', Tareascontroller.mostrar);
Router.get('/:id',Tareascontroller.mostrarid);
Router.post('/', Tareascontroller.crear);

Router.delete('/:id',Tareascontroller.borrar);

module.exports = Router;
