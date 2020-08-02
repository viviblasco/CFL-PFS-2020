var Paciente = /** @class */ (function () {
    //constructor
    function Paciente(idPaciente, DNI, nombreYApellido, edad, telefono) {
        this.idPaciente = idPaciente;
        this.DNI = DNI;
        this.nombreYApellido = nombreYApellido;
        this.edad = edad;
        this.telefono = telefono;
    }
    //metodos get
    Paciente.prototype.getId = function () {
        return this.idPaciente;
    };
    Paciente.prototype.getDNI = function () {
        return this.DNI;
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
    Paciente.prototype.setId = function (idPaciente) {
        this.idPaciente = idPaciente;
    };
    Paciente.prototype.setDNI = function (DNI) {
        this.DNI = DNI;
    };
    Paciente.prototype.setNombreYApellido = function (nombreYApellido) {
        this.nombreYApellido = nombreYApellido;
    };
    Paciente.prototype.setTelefono = function (telefono) {
        this.telefono = telefono;
    };
    return Paciente;
}());
