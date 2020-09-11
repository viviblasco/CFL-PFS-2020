//import Producto from './Producto';
import kiosco from "./Kiosco";

//creo mi kiosquito
var nuevoKiosco = new kiosco("Mercadito Cacho");
nuevoKiosco.cargarListaProductos("./listaProductos.txt");

console.log(nuevoKiosco.getListaProductos());

cargarListaProductos("./li": string)