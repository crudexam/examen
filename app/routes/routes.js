import { Router } from "express";
import { rutaUser } from "./rute.proveedor.js";

const ruta = Router();
ruta.use("/api",rutaUser);

export default ruta;