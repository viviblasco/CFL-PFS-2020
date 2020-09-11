import * as fs from "./node_modules/extra";
import Producto from "./Producto";

export default class Kiosco{
    private nombre:string;
    private listaProductos:Producto[]=[];
    private listaVentas:Producto[]=[];

    //constructor
    public constructor(nombre: string){
        this.nombre = nombre;
    }
    //busco el archivo y lo cargo
    public cargarListaProductos(rutaArchivo: string) {
        let archivo: string = fs.readFileSync(rutaArchivo, 'utf8');
        let lineas: string[] = archivo.split("\n");
        lineas.map(linea => linea.replace("\r", ""));
        
        let aux: string[];

        for (let i:number=0; i<lineas.length; i++) {
            aux = lineas[i].split(",");
            let producto: Producto = new Producto(parseInt(aux[0]), aux[1], parseInt(aux[2]), parseInt(aux[3]));
            this.listaProductos.push(producto);
        }
    }
    //guardo la venta en la lista ,en el archivo guardado
    public guardarListaVentas(rutaArchivo: string) {
        let ventasString: string = "";

        for (let i: number = 0; i<this.listaVentas.length; i++) {
            ventasString += this.listaVentas[i].toString();
            if (i<this.listaVentas.length-1) {
                ventasString += "\n";
            }
        }

        fs.writeFileSync(rutaArchivo, ventasString);
    }


    public getNombre(): string {
        return this.nombre;
    }
    public getListaProductos(): Producto[] {
        return this.listaProductos;
    }
    public getListaVentas(): Producto[] {
        return this.listaVentas;
    }

    //vendo el producto lo busco si esta se busca la cantidad necesaria si no la tenemos se responde con mensaje

    public vender(producto: Producto) {
        let indice: number = this.buscarProducto(producto);
        if (indice === -1) {
            throw new Error("No existe el producto en Stock");
        } else {
            let aux = this.listaProductos[indice];
            if (aux.getCantidad() >= producto.getCantidad()) {
                aux.setCantidad( aux.getCantidad() - producto.getCantidad());
                this.listaVentas.push(producto);
                console.log("Venta realizada correctamente");
            } else {                
                throw new Error("No alcanza el Stock para realizar esa venta");
            }
        }
    }
    
    //metodo privado para buscar en el stock
    private buscarProducto(producto: Producto): number {
        for (let i=0; i < this.listaProductos.length; i++) {
            let aux = this.listaProductos[i];
            if (producto.getId() === aux.getId()) {
                return i;
            }
        }
        return -1;
    }

}