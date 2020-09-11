export default class Producto{
    private id:number;
    private nombre:string;
    private precio:number;
    private cantidad:number;

    public constructor (id:number,nombre:string,precio:number,cantidad:number){
        this.id= id;
        this.nombre=nombre;
        this.precio=precio;
        this.cantidad= cantidad;
    }
    public setPrecio(precio: number): void {
        this.precio = precio;
    }
    public setCantidad(cantidad: number): void {
        this.cantidad = cantidad;
    }
    public getId(): number {
        return this.id;
    }
    public getCosto(): number {
        return this.precio;
    }
    public getCantidad(): number {
        return this.cantidad;
    }

    public toString(): string {
        return "" + this.id + "," + this.nombre + "," + this.precio + "," + this.cantidad;
    }

}