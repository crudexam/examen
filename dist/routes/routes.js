"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _ruteProveedor = require("./rute.proveedor.js");
var ruta = (0, _express.Router)();
ruta.use("/api", _ruteProveedor.rutaUser);
var _default = exports["default"] = ruta;