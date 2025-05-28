const express = require('express');
const Categoriasrouter = require('./src/routes/Categoriasroutes');
const Tareas = require('./src/routes/Tareasroutes')
require('dotenv').config();
const app = express();

app.use(express.json());
app.use('/categorias', Categoriasrouter);
app.use('/tareas',Tareas )



app.listen(process.env.PORT, () =>
console.log (`Servidor volando en http://localhost:${process.env.PORT}`)
);