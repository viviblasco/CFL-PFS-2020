"use strict";
exports.__esModule = true;
var Producto = /** @class */ (function () {
    function Producto(id, nombre, precio, cantidad) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.cantidad = cantidad;
    }
    Producto.prototype.setPrecio = function (precio) {
        this.precio = precio;
    };
    Producto.prototype.setCantidad = function (cantidad) {
        this.cantidad = cantidad;
    };
    Producto.prototype.getId = function () {
        return this.id;
    };
    Producto.prototype.getCosto = function () {
        return this.precio;
    };
    Producto.prototype.getCantidad = function () {
        return this.cantidad;
    };
    Producto.prototype.toString = function () {
        return "" + this.id + "," + this.nombre + "," + this.precio + "," + this.cantidad;
    };
    return Producto;
}());
exports["default"] = Producto;
