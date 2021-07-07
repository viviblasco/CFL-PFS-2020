import Camara from "./Camara";
import Telefono from "./telefono";


export default class TelefonoConCamara extends Telefono {


    private camara:Camara;

    constructor(){
        super();
        
        this.camara=new Camara;
    }

    public sacarFoto():void{
        this.camara.sacarFoto();
      
    }
    
    
}