"use strict";
exports.__esModule = true;
var LectorArchivos_1 = require("./LectorArchivos");
var Paciente_1 = require("./Paciente");
var GestorPacientes = /** @class */ (function () {
    function GestorPacientes(pacienteArchivo) {
        this.contadorId = 0;
        this.lector = new LectorArchivos_1["default"]();
        if (pacienteArchivo) {
            this.paciente = this.cargarPaciente(PacienteArchivo);
        }
        else {
            this.paciente = new Array();
        }
        /*
         * Carga de pacientes al gestor a partir de un archivo de texto
         * se lee la ruta del archivo
         */
    }
    /*
     * Carga de pacientes al gestor a partir de un archivo de texto
     * se lee la ruta del archivo
     */
    GestorPacientes.prototype.cargarPacientes = function (pacienteArchivo) {
        var pacienteString;
        var aux;
        var pacienteArreglo;
        var archivo = this.lector.cargarArchivo(pacienteArchivo);
        if (archivo) {
            pacienteString = this.lector.leerArchivo();
        }
        pacienteArreglo = new Array();
        for (var i = 0; i < pacienteString.length; i++) {
            aux = pacienteString[i].split(',');
            this.contadorId++;
            var paciente = new Paciente_1["default"](this.contadorId, aux[0], aux[1], aux[2], parseInt(aux[3]));
            pacienteArreglo.push(paciente);
        }
        return pacienteArreglo;
    };
    /**
   * Busca los paciente en los registros por DNI y por nombre y apellido
     devuelve la posicion del arreglo en donde esta el paciente o -1 si no existe
   */
    GestorPacientes.prototype.buscarPaciente = function (paciente) {
        var indice = -1;
        for (var i = 0; i < this.paciente.length; i++) {
            if (this.paciente[i].getDNI() === paciente.getDNI()
                && this.paciente[i].getNombreYApellido() === paciente.getNombreYApellido()) {
                indice = i;
            }
        }
        ;
        return indice;
    };
    //muestra el paciente buscado por nombre y apellido
    GestorPacientes.prototype.verPacientePorNombre = function (NombreYApellido) {
        for (var i = 0; i < this.paciente.length; i++) {
            if (this.paciente[i].getNombreYApellido() === NombreYApellido) {
                console.log(this.paciente[i]);
            }
        }
        ;
    };
    //muestra el paciente buscado por DNI
    GestorPacientes.prototype.verPacientePorDni = function (DNI) {
        for (var i = 0; i < this.paciente.length; i++) {
            if (this.paciente[i].getDNI() === DNI) {
                console.log(this.paciente[i]);
            }
        }
        ;
    };
    //agrega un paciente a la lista
    GestorPacientes.prototype.agregarPaciente = function (idPaciente, DNI, nombreYApellido, edad, telefono) {
        this.contadorId++;
        var paciente = new Paciente_1["default"](this.contadorId, idPaciente, DNI, nombreYApellido, edad, telefono);
        this.paciente.push(paciente);
    };
    //busca un paciente por id en la lista de registro de pacientes
    GestorPacientes.prototype.buscarPacientePorId = function (idPaciente) {
        var indice = -1;
        for (var i = 0; i < this.paciente.length; i++) {
            var aux = this.paciente[i];
            if (aux.getIdPaciente() === idPaciente) {
                indice = i;
            }
        }
        return indice;
    };
    //borrar un paciente del registro
    GestorPacientes.prototype.borrarPaciente = function (idPaciente) {
        var indice = this.buscarPacientePorId(idPaciente);
        if (indice === -1) {
            console.log("El paciente no esta registrado");
        }
        else {
            this.paciente.splice(indice, 1);
            console.log("El Paciente se ha borrado del registro");
        }
    };
    //modifica los datos de un paciente en el registro
    GestorPacientes.prototype.modificarPaciente = function (idPaciente, DNI, nombreYApellido, edad, telefono) {
        var indice = this.buscarPacientePorId(idPaciente);
        if (indice === -1) {
            console.log("El paciente no esta registrado");
        }
        else {
            if (idPaciente) {
                this.paciente[indice].setAutor(idPaciente);
            }
            if (DNI) {
                this.paciente[indice].setTitulo(DNI);
            }
            if (nombreYApellido) {
                this.paciente[indice].setEditorial(nombreYApellido);
            }
            if (edad) {
                this.paciente[indice].setEdicion(edad);
            }
            if (telefono) {
                this.paciente[indice].setEdicion(telefono);
            }
            console.log("El registro del paciente quedo actualizado");
        }
    };
    return GestorPacientes;
}());
exports["default"] = GestorPacientes;
