const pool = require('../db/db');

exports.mostrar = async (res,req) =>{
    try{
        const [rows] = await pool.query('SELECT * FROM Tareas')
        res.json(rows)
    } catch (error) {
      console.log({error:error})
      res.status(500).json({message:'No muestra categorias', error})
    }
};

exports.mostrarid = async (res,req) => {
    const { id } = req.params
    try{
      const [rows] = await pool.query('SELECT * FROM Tareas W', [id])
      res.json(rows)
    }catch(error){
    console.log({error:error})
    res.status(500).json({message: 'No muestra la categoria mostrada', error})
    }
};
