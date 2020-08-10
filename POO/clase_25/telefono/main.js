"use strict";
exports.__esModule = true;
var telefono_1 = require("./telefono");
var TelefonoConCamara_1 = require("./TelefonoConCamara");
//declaracion de variables
var movil1;
var movil2;
//contrcutores
movil1 = new telefono_1["default"]();
movil2 = new TelefonoConCamara_1["default"]();
//prender el Telefono
movil1.prenderApagar(true);
movil2.prenderApagar(true);
movil2.mandarMensaje("Hola venis hoy al asado? Ya paso la Pandemia");
movil1.hacerLlamada("hola", 2494051223);
console.log(movil2.sacarFoto());
