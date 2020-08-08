import camara from "./Camara";
import Telefono from "./telefono";


export default class TelefonoConCamara extends Telefono {


    private camara:camara;

    constructor(){
        super();
        this.camara=new camara;
    }

    public sacarFoto():void{
        
      
        

    }
    
}