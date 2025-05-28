const pool = require('../db/db');

exports.mostrar = async (res,req) =>{
    try{
        const [rows] = await pool.query('SELECT * FROM Categorias')
        res.json(rows)
    } catch (error) {
      console.log({error:error})
      res.status(500).json({message:'No muestra categorias', error})
    }
};

exports.mostrarid = async (res,req) => {
    const { id } = req.params
    try{
      const [rows] = await pool.query('SELECT * FROM Categorias WHERE id= ?', [id])
      res.json(rows)
    }catch(error){
    console.log({error:error});
    res.status(500).json({message: 'No muestra la categoria mostrada', error})
    }
};

exports.crear = async (res,req) => {
    const { nombre } = req.body
    try{
        await pool.query('INSERT INTO Categorias(nombre) VALUES nombre= ?', [nombre])
        res.json('Datos correctamente puestos')
    }catch(error){
     console.log({error:error});
     res.status(500).json({message: 'Campos no insertados correctamente', error})
    }
};

exports.borrar = async (res,req) => {
    const { id } = req.params;
    try{
        await pool.query('DELETE FROM Categorias WHERE id= ?',[id])
        res.json('Campos Eliminados')
    } catch (error) {
        console.log({error:error})
        res.status(500).json({message:'Campos no eliminados'})
    }
};