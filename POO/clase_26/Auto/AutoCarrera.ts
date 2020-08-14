import Auto from "./Auto";

export default class AutoCarrera extends Auto { 
    private  numero: number;
    private sponsors: string[];

    public constructor(marca: string, modelo: string, numeroCompetencia: number, sponsors?: string[]) { 
        super(marca, modelo);
        this.numero = numeroCompetencia;
        if (sponsors) {
            this.sponsors = sponsors;
        } else {            
            this.sponsors = [];
        }
    }
    public acelerar(): void { 
        this.velocidadActual += 50;
    } 
    public getNumero(): number {
        return this.numero;
    }
    public cambiarNumero(numeroNuevo: number): void {
        this.numero = numeroNuevo;
    }

    public agregarSponsor(sponsor: string): void {
        let indice = this.buscarSponsor(sponsor);
        if ( indice === -1) {
            this.sponsors.push(sponsor);
        } else {
            console.log("El sponsor ya existe");
        }
    }
    public eliminarSponsor(sponsor: string) : void {
        let indice = this.buscarSponsor(sponsor);
        if ( indice != -1) {
            this.sponsors.splice(indice);
        } else {
            console.log("El sponsor no existe");
        }
    }
    private buscarSponsor(sponsor: string): number {
        for (let i: number = 0; i<this.sponsors.length; i++) {
            if (this.sponsors[i] === sponsor) {
                return i;
            }
        }
        return -1;
    }
}
