
import Telefono from "./Telefono";

export default class TelefonoConCamara extends Telefono {

private frecuenciaActual:number;

public constructor() {
    super();

    this.frecuenciaActual=85.5;
}


public  verfrecuenciaActual(frecuenciaActual:number):void{
    console.log(frecuenciaActual)

 }
}