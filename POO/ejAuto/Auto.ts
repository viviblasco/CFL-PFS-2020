
class Auto {
    private marca: string;
    private modelo: string;
    private color: string;
    private año: number;
    private patente: string;
    private estaPrendido:boolean;
    private velocidadActual:number;


    public constructor(marca: string, modelo: string, color: string, año: number, patente: string, estaPrendido:boolean,velocidadActual:number) {
        this.marca = marca;
        this.modelo = modelo;
        this.color = color;
        this.año = año;
        this.patente = patente;
        this.estaPrendido= estaPrendido;
        this.velocidadActual=velocidadActual;
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
    encendidoApagado():void{
        if(this.estaPrendido){
            this.estaPrendido=false;
        }else{
            this.estaPrendido=true;
        }
    }
   aumentarVelocidad():void{
        this.velocidadActual=this.velocidadActual+1;
    }
    disminuirVelocidad():void{
        this.velocidadActual=this.velocidadActual-1;
    }
    
    velocidadCrucero(velocidadDeseada:number):void{
        this.velocidadActual=velocidadDeseada;
    }

}
//construyendo autos


let miAuto1 = new Auto('Ford', 'fiesta', 'Rojo', 2014, 'fuw976', true,20);
console.log(miAuto1);
console.log('');
miAuto1.velocidadCrucero(80);

let miAuto2 = new Auto('Fiat', 'Uno', 'Azul', 2005, 'EVU174',false,0);
console.log(miAuto2);
console.log('');

let miAuto3 = new Auto("citroen","sahara","verde",2018,"hug005",true,20);
console.log(miAuto3);
console.log(" ");