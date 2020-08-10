"use strict";
exports.__esModule = true;
exports.Auto = void 0;
var Auto = /** @class */ (function () {
    function Auto(marca, modelo) {
        this.marca = marca;
        this.modelo = modelo;
        this.velocidadActual = 0;
    }
    Auto.prototype.acelerar = function () {
        this.velocidadActual += 10;
    };
    return Auto;
}());
exports.Auto = Auto;
