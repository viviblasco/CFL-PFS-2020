//import * from "./node-emoji";
import Telefono from "./telefono";
import TelefonoConCamara from "./TelefonoConCamara"


//declaracion de variables

let movil1:Telefono;
let movil2:TelefonoConCamara;

//contrcutores
movil1=new Telefono();
movil2 =new TelefonoConCamara();


//prender el Telefono
movil1.prenderApagar(true);
movil2.prenderApagar(true);

movil2.mandarMensaje("Hola venis hoy al asado? Ya paso la Pandemia")
movil1.hacerLlamada("hola",2494051223);



console.log(movil2.sacarFoto());

