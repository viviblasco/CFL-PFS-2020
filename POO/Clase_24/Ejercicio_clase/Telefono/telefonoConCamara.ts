import Telefono from "./Telefono";

export default class TelefonoConCamara extends Telefono {
    public constructor() {
        super();
        this.estaPrendido = true;
        

    }

public sacarFoto(mensaje:string):void{
    mensaje ="click";
    console.log(mensaje);

 }
} 