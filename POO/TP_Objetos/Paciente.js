"use strict";
exports.__esModule = true;
var Paciente = /** @class */ (function () {
    //constructor
    function Paciente(id, Dni, nombreYApellido, edad, telefono) {
        this.id = id;
        this.Dni = Dni;
        this.nombreYApellido = nombreYApellido;
        this.edad = edad;
        this.telefono = telefono;
    }
    //metodos get
    Paciente.prototype.getId = function () {
        return this.id;
    };
    Paciente.prototype.getDNI = function () {
        return this.Dni;
    };
    Paciente.prototype.getNombreYApellido = function () {
        return this.nombreYApellido;
    };
    Paciente.prototype.getEdad = function () {
        return this.edad;
    };
    Paciente.prototype.getTelefono = function () {
        return this.telefono;
    };
    //metodos set
    Paciente.prototype.setId = function (id) {
        this.id = id;
    };
    Paciente.prototype.setDNI = function (Dni) {
        this.Dni = Dni;
    };
    Paciente.prototype.setNombreYApellido = function (nombreYApellido) {
        this.nombreYApellido = nombreYApellido;
    };
    Paciente.prototype.setTelefono = function (telefono) {
        this.telefono = telefono;
    };
    return Paciente;
}());
exports["default"] = Paciente;
