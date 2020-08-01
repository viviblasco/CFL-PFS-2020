var Monitor = /** @class */ (function () {
    function Monitor() {
        this.brilloActual = 0;
        this.contrasteActual = 0;
        //contruyendo monitor
    }
    Monitor.prototype.prenderApagar = function () {
        if (this.encendido) {
            this.encendido = true;
        }
        else {
            this.encendido = false;
        }
    };
    Monitor.prototype.aumentarBrillo = function () {
        this.brilloActual = this.brilloActual + 1;
    };
    Monitor.prototype.disminuirBrillo = function () {
        this.brilloActual = this.brilloActual - 1;
    };
    Monitor.prototype.aumentarContraste = function () {
        this.contrasteActual = this.contrasteActual + 1;
    };
    Monitor.prototype.disminuirContraste = function () {
        this.contrasteActual = this.contrasteActual - 1;
    };
    Monitor.prototype.ingreseMarca = function (marca) {
        console.log("Bienvenido a su Monitor: " + marca);
    };
    return Monitor;
}());
var miMonitor = new Monitor();
var marca = "sanyo";
miMonitor.ingreseMarca(marca);
miMonitor.prenderApagar();
miMonitor.aumentarBrillo();
miMonitor.aumentarContraste();
console.log(miMonitor);
console.log('');
