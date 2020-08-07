
import Telefono from "./Telefono";

export default class TelefonoConRadio extends Telefono {

private frecuenciaActual:number =0;

public constructor() {
    super();
    this.frecuenciaActual=85.5;
}


public  verfrecuenciaActual(frecuenciaActual:number):void{
    console.log(frecuenciaActual);

 }
}