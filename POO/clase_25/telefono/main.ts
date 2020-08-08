
import Telefono from "./telefono";
import TelefonoConCamara from "./TelefonoConCamara"



let movil1:Telefono;
let movil2:TelefonoConCamara;


movil1=new Telefono;
movil2 =new TelefonoConCamara;

movil1.hacerLlamada("hola",2494051223);


console.log(movil2.sacarFoto);

