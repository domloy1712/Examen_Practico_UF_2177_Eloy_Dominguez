const pool = require('./db');

pool.query(`create DATABASE gestion_tareas;
use gestion_tareas;

CREATE TABLE IF NOT EXISTS categorias (
     id INT AUTO_INCREMENT PRIMARY KEY,
     nombre VARCHAR(255) NOT NULL
   );

   CREATE TABLE IF NOT EXISTS tareas (
     id INT AUTO_INCREMENT PRIMARY KEY,
     titulo VARCHAR(255) NOT NULL,
     descripcion TEXT,
     completada BOOLEAN DEFAULT FALSE,
     categoria_id INT,
     FOREIGN KEY (categoria_id) REFERENCES categorias(id)
       ON DELETE SET NULL ON UPDATE CASCADE
   );`
);