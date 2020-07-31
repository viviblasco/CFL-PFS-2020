
class Auto {
    private marca: string
    private modelo: string
    private color: string
    private año: number
    private patente: string


    public constructor(marca: string, modelo: string, color: string, año: number, patente: string) {
        this.marca = marca;
        this.modelo = modelo;
        this.color = color;
        this.año = año;
        this.patente = patente;
    }

    getMarca(): string {
        return this.marca;
    }
    getModelo(): string {
        return this.modelo;
    }
    getCombustible(): string {
        return this.color;
    }
    getAño(): number {
        return this.año;
    }
    getPatente(): string {
        return this.patente;
    }
}
//construyendo autos


let miAuto1 = new Auto('Ford', 'fiesta', 'Rojo', 2014, 'fuw976');
console.log(miAuto1);
console.log('');

let miAuto2 = new Auto('Fiat', 'Uno', 'Azul', 2005, 'EVU174');
console.log(miAuto2);
console.log('');