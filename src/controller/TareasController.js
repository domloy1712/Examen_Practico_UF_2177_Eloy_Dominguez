const pool = require('../db/db');

exports.mostrar = async (req,res) =>{
    try{
        const [rows] = await pool.query('SELECT * FROM Tareas')
        res.json(rows)
    } catch (error) {
      console.log({error:error})
      res.status(500).json({message:'No muestra categorias', error})
    }
};

exports.mostrarid = async (req,res) => {
    const { id } = req.params
    try{
      const [rows] = await pool.query('SELECT * FROM Tareas WHERE id= ?', [id])
      res.json(rows)
    }catch(error){
    console.log({error:error})
    res.status(500).json({message: 'No muestra la categoria mostrada', error})
    }
};

exports.crear = async (req,res) => {
    const { Titulo, descripcion, completada, categoria_id } = req.body
    try{
        await pool.query('INSERT INTO Tareas(Titulo, Descripcion, Completada, categoria_id) VALUES (?,?,?,?)', [Titulo, descripcion, completada, categoria_id]);
        res.json('Datos correctamente puestos')
    }catch(error){
     console.log({error:error});
     res.status(500).json({message: 'Campos no correctos no insertados'})
    }
};

exports.borrar = async (req,res) => {
    const { id } = req.params;
    try{
        await pool.query('DELETE FROM Tareas WHERE id= ?',[id])
        res.json('Campos Eliminados')
    } catch (error) {
        console.log({error:error})
        res.status(500).json({message:'Campos no eliminados'})
    }
};

exports.modificar = async (req,res) => {
const {id} = req.params;
const { Titulo, descripcion, completada, categoria_id   } = req.body;
try {
    await pool.query ('SELECT * FROM Categorias WHERE id= ?', [id]);
    await pool.query ('UPDATE Categorias SET Titulo=?, descripcion=?, completada=?, categoria=? WHERE id=?', [Titulo,descripcion,completada,categoria_id,id]);
    res.json('Se modificaron bien');
} catch (error){
    console.log(error)
    res.status(500).json({message:'no se modificaron correctamente', error})
}

};