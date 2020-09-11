"use strict";
exports.__esModule = true;
//creo mi kiosquito
var nuevoKiosco = new Kiosco;
nuevoKiosco.cargarListaProductos("./listaProductos.txt");
console.log(nuevoKiosco.getListaProductos());
