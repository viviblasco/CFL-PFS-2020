export default class Televisor {
    protected canalActual: number;
    protected volumenActual: number;
    protected estaPrendido: boolean;
 
    public constructor() {
        this.canalActual = 0;
        this.volumenActual = 10;
        this.estaPrendido = false;
    }
 
    public cambiarCanal(canal: number): void {
        this.canalActual = canal;
    }
 
    protected cambiarVolumen(volumen: number): void {
        this.volumenActual = volumen;
    }
 
    public prenderApagar(): void {
        if (this.estaPrendido)
            this.estaPrendido = false;
        else
            this.estaPrendido = true;
    }
 }
 