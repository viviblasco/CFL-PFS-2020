class Televisor {
    private estaPrendido: boolean
    private volumenActual: number
    private canalActual: number

    constructor(volumenInicial: number, canalInicial: number) {
        this.volumenActual = volumenInicial;
        this.canalActual = canalInicial;
        this.estaPrendido = false;
        }
       
    prenderApagar(): void {
            if (this.estaPrendido)
                this.estaPrendido = false;
            else
                this.estaPrendido = true;
            
    }
    subirVolumen(): void {
                this.volumenActual = this.volumenActual + 1;
    }
    bajarVolumen(): void {
                this.volumenActual = this.volumenActual - 1;
    }
    subirCanal(): void {
                this.canalActual = this.canalActual + 1;
    }
    bajarCanal(): void {
                this.canalActual = this.canalActual - 1;
    }
    elegirCanal(canal: number): void {
                this.canalActual = canal;
    }
   }


let volumenInicial: number = 10;
let canalInicial: number = 24;
let miTv = new Televisor(volumenInicial, canalInicial);
miTv.prenderApagar();
miTv.elegirCanal(45);
miTv.bajarVolumen();
console.log(miTv);
