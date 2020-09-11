var Auto = /** @class */ (function () {
    function Auto(marca, modelo, color, año, patente, estaPrendido, velocidadActual) {
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
    Auto.prototype.encendidoApagado = function () {
        if (this.estaPrendido) {
            this.estaPrendido = false;
        }
        else {
            this.estaPrendido = true;
        }
    };
    Auto.prototype.aumentarVelocidad = function () {
        this.velocidadActual = this.velocidadActual + 1;
    };
    Auto.prototype.disminuirVelocidad = function () {
        this.velocidadActual = this.velocidadActual - 1;
    };
    Auto.prototype.velocidadCrucero = function (velocidadDeseada) {
        this.velocidadActual = velocidadDeseada;
    };
    return Auto;
}());
//construyendo autos
var miAuto1 = new Auto('Ford', 'fiesta', 'Rojo', 2014, 'fuw976', true, 20);
console.log(miAuto1);
console.log('');
velocidadCrucero(80);
var miAuto2 = new Auto('Fiat', 'Uno', 'Azul', 2005, 'EVU174', false, 0);
console.log(miAuto2);
console.log('');
var miAuto3 = new Auto("citroen", "sahara", "verde", 2018, "hug005", true, 20);
console.log(miAuto3);
console.log(" ");
