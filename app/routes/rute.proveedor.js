import {Router} from "express";
import { crearUser, eliminarUser, modificarUser, mostrarUser, mostrarUserID } from "../controller/control.js";


export const rutaUser = Router();

rutaUser.post("/user", crearUser);
rutaUser.get("/user", mostrarUser);
rutaUser.get("/user/:id", mostrarUserID);
rutaUser.put("/user", modificarUser);
rutaUser.delete("/user", eliminarUser); 



