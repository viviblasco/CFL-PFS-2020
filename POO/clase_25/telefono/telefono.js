"use strict";
exports.__esModule = true;
var Telefono = /** @class */ (function () {
    function Telefono() {
        this.estaPrendido = true;
        this.bateriaActual = 10;
        this.linternaPrendida = true;
    }
    Telefono.prototype.mandarMensaje = function (mensaje) {
        console.log("tilin");
    };
    Telefono.prototype.hacerLlamada = function (mensaje, numero) {
        console.log("rin");
        console.log("llamada al numero :" + numero);
    };
    Telefono.prototype.prenderApagar = function (estado) {
        if (estado = true) {
            console.log("su telefono esta prendido");
        }
        else {
            console.log("telefono apagado");
        }
    };
    return Telefono;
}());
exports["default"] = Telefono;
