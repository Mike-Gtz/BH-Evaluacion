import { pool } from "../db.js";

export const getTasks = async(req, res) => {

    const [result] = await pool.query('SELECT * FROM discos');
    res.json(result);
}

export const getTask = async(req, res) => {
    const [result] = await pool.query('SELECT * FROM discos WHERE id = ?', [req.params.id]);
    
    if(result.length == 0){
        return res.status(404).json({message: "Producto no encontrado"});
    }

    res.json(result);
}

export const createTasks = async(req, res) => {
    const {titulo, descripcion, precio}= req.body;
    const [result] = await pool.query('INSERT INTO discos(titulo, descripcion, precio) VALUES (?, ?, ?) ',
    [
        titulo,
        descripcion,
        precio
    ]);

    console.log(result);
    res.json({
        id: result.insertId, titulo, descripcion, precio
    });
}

export const updateTask = async(req, res) => {
    const [result] = await pool.query('UPDATE discos SET ? WHERE id = ?', [req.body, req.params.id]);

    res.json(result);
}

export const deleteTasks = async(req, res) => {
    const [result] = await pool.query('DELETE FROM discos WHERE id = ?', [req.params.id]);
    
    if(result.affectedRows == 0){
        return res.status(404).json({message: "Producto no encontrado"});
    }

    return res.sendStatus(204);
}
