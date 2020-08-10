import Auto from "./Auto";


export class AutoDeCarrera extends Auto {
    public constructor(marca: string, modelo: string) {
    super(marca, modelo);
    }


    public acelerar(): void {
    this.velocidadActual += 50;
    }
   }
   