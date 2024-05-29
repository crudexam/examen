import pool from "../config/db.mysql.js";
import {success, error} from "../config/msj.js"


export const crearUser = async(req,res)=>{
    const nombre = req.body.name;
    try {
        const respuesta = await pool.query(`CALL sp_crearU('${nombre}');`);
        if (respuesta[0].affectedRows == 1){
            success(req,res,200, "Usuario agregado");
        }else{
            error(req,res,400, "No se puede agregar")
        }
        
    } catch (err) {
        error(req, res, 501, err)
    }
};

export const mostrarUser = async(req, res)=>{
    try {
        const respuesta = await pool.query(`CALL sp_todos();`);
        console.log(respuesta);
        success(req,res,200,respuesta[0])
    } catch (err) {
        error(req, res, 500, err)
    }
};

export const mostrarUserID = async(req,res)=>{
    let id = req.params['id'];
    try {   
        const respuesta = await pool.query(`CALL sp_buscar(${id});`);
        console.log(respuesta);
        success(req,res,200,respuesta[0])
    } catch (err) {
        error(req, res, 500, err)
    }
};

export const modificarUser = async(req,res)=>{
    const id = req.body.id;
    const nombre = req.body.name;
    try {
        const respuesta = await pool.query(`CALL sp_modificar('${id}','${nombre}');`);
        if (respuesta[0].affectedRows == 1){
            success(req,res,200, "Usuario modificado");
        }else{
            error(req,res,400, "No se puede modifikcar")
        }
        
    } catch (err) {
        error(req, res, 501, err)
    }
};

export const eliminarUser = async(req,res)=>{
    const id = req.body.id;
    try {
        const respuesta = await pool.query(`CALL sp_borrar('${id}');`);
        if (respuesta[0].affectedRows == 1){
            success(req,res,200, "Usuario eliminado");
        }else{
            error(req,res,400, "No se puede modificar")
        }
        
    } catch (err) {
        error(req, res, 501, err)
    }
};
