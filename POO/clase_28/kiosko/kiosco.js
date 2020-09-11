"use strict";
exports.__esModule = true;
var fs = require("./node_modules/extra");
var Producto_1 = require("./Producto");
var Kiosco = /** @class */ (function () {
    //constructor
    function Kiosco(nombre) {
        this.listaProductos = [];
        this.listaVentas = [];
        this.nombre = nombre;
    }
    //busco el archivo y lo cargo
    Kiosco.prototype.cargarListaProductos = function (rutaArchivo) {
        var archivo = fs.readFileSync(rutaArchivo, 'utf8');
        var lineas = archivo.split("\n");
        lineas.map(function (linea) { return linea.replace("\r", ""); });
        var aux;
        for (var i = 0; i < lineas.length; i++) {
            aux = lineas[i].split(",");
            var producto = new Producto_1["default"](parseInt(aux[0]), aux[1], parseInt(aux[2]), parseInt(aux[3]));
            this.listaProductos.push(producto);
        }
    };
    //guardo la venta en la lista ,en el archivo guardado
    Kiosco.prototype.guardarListaVentas = function (rutaArchivo) {
        var ventasString = "";
        for (var i = 0; i < this.listaVentas.length; i++) {
            ventasString += this.listaVentas[i].toString();
            if (i < this.listaVentas.length - 1) {
                ventasString += "\n";
            }
        }
        fs.writeFileSync(rutaArchivo, ventasString);
    };
    Kiosco.prototype.getNombre = function () {
        return this.nombre;
    };
    Kiosco.prototype.getListaProductos = function () {
        return this.listaProductos;
    };
    Kiosco.prototype.getListaVentas = function () {
        return this.listaVentas;
    };
    //vendo el producto lo busco si esta se busca la cantidad necesaria si no la tenemos se responde con mensaje
    Kiosco.prototype.vender = function (producto) {
        var indice = this.buscarProducto(producto);
        if (indice === -1) {
            throw new Error("No existe el producto en Stock");
        }
        else {
            var aux = this.listaProductos[indice];
            if (aux.getCantidad() >= producto.getCantidad()) {
                aux.setCantidad(aux.getCantidad() - producto.getCantidad());
                this.listaVentas.push(producto);
                console.log("Venta realizada correctamente");
            }
            else {
                throw new Error("No alcanza el Stock para realizar esa venta");
            }
        }
    };
    //metodo privado para buscar en el stock
    Kiosco.prototype.buscarProducto = function (producto) {
        for (var i = 0; i < this.listaProductos.length; i++) {
            var aux = this.listaProductos[i];
            if (producto.getId() === aux.getId()) {
                return i;
            }
        }
        return -1;
    };
    return Kiosco;
}());
exports["default"] = Kiosco;
