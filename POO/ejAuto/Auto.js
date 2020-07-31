var Auto = /** @class */ (function () {
    function Auto(marca, modelo, color, año, patente) {
        this.marca = marca;
        this.modelo = modelo;
        this.color = color;
        this.año = año;
        this.patente = patente;
    }
    Auto.prototype.getMarca = function () {
        return this.marca;
    };
    Auto.prototype.getModelo = function () {
        return this.modelo;
    };
    Auto.prototype.getCombustible = function () {
        return this.color;
    };
    Auto.prototype.getAño = function () {
        return this.año;
    };
    Auto.prototype.getPatente = function () {
        return this.patente;
    };
    return Auto;
}());
//construyendo autos
var miAuto1 = new Auto('Ford', 'fiesta', 'Rojo', 2014, 'fuw976');
console.log(miAuto1);
console.log('');
var miAuto2 = new Auto('Fiat', 'Uno', 'Azul', 2005, 'EVU174');
console.log(miAuto2);
console.log('');
