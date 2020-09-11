//Clase ArticuloLectura con todos sus atributos y solo el setter de cantidadPaginas. Asumir que el resto de los métodos ya se encuentran implementados.
abstract class  ArticuloLectura {
    private ISBN:number;
    private autor:string;
    private editorial:string;
    private titulo:string;
    protected cantidadPaginas:number;

    public constructor(ISBN:number,autor:string,editorial:string,titulo:string,cantidadPaginas:number){
      this.ISBN=ISBN;
      this.autor=autor;
      this.editorial=editorial;
      this.titulo=titulo;
      this.cantidadPaginas=cantidadPaginas;

    }
    //metodos getters
    public getISBN(){
        return this.ISBN;
    }
    public getAutor(){
        return this.autor;
    }
    public getEditorial(){
        return this.editorial;
    }
    public getTitulo(){
        return this.titulo;
    }
  
    public getCantidadPAginas() {
        return this.cantidadPaginas;
        
    }
    //metodos setters
    public setISBN(ISBN:number):void{
        this.ISBN =ISBN ;
    }
    public setAutor(autor:string):void{
         this.autor=autor;
    }
    public setEditorial(editorial:string):void{
        this.editorial=editorial;
    }
    public setTitulo(titulo:string):void{
         this.titulo=titulo;
    }
  
    public setCantidadPAginas(cantidadPaginas:number):void {
        this.cantidadPaginas = cantidadPaginas;
        
    }



}
class Biblioteca{
    private elementos:ArticuloLectura[];
    private nombreBiblioteca:string;
    private direccion:string;

    public constructor(elementos:ArticuloLectura[],nombreBiblioteca:string,direccion:string){
        this.elementos = elementos;
        this.nombreBiblioteca = nombreBiblioteca;
        this.direccion= direccion;  
    }
    /*- El método insertar RECIBE un Elemento de Lectura (Libro o Revista) y agregarlo a la lista de elementos, retornará true en caso de haberlo guardado exitosamente y false en otro caso. */

    public insertar(a:ArticuloLectura):boolean{
        
       if  (this.elementos.push(a)){
           return true;
           console.log("Se guardo con exito");
       }else{
        return false; 
        console.log("error no pudo borrarse");
       }
        
        

    }
  

    /*El método buscar, recibira el numero de ISBN del elemento y deberá retornar el elemento de lectura correspondiente, en caso de no existir, manejar el error como crea adecuado.*/

    public buscar(ISBN:number):ArticuloLectura{
        let indice = -1;
        for(let i: number = 0; i<this.elementos.length; i++) {
            let aux: ArticuloLectura = this.elementos[i];
            if (aux.getISBN() === ISBN) {
                indice = i; 
                console.log(this.elementos[i].getISBN());
                return this.elementos[i];
            } else{
                throw new Error('no se encontro el archivo');
            
            }
          
        }
      
    }

    //El método modificarPaginas, recibe el ID del artículo y retorna true en caso de éxito y false en otro caso.
    public modificarPaginas(id:number):boolean{
        let indice: number = this.buscar(id);
        if ( indice === -1) {
            console.log("no exite articulo");
            return true;
        } else {
               this.modificarPaginas(id);
           
            console.log("El articulo quedo actualizado");
            return true;
        }

    }
    // El método eliminar recibe un identificador de artículo y debe retornar true en caso de haberlo borrado exitosamente y false en caso contrario.
    public eliminar(id:number):boolean{
        let indice: number = this.buscar(id);
        if ( indice === -1) {
            console.log("El articulo no existe");
            return false;
        } else {
            this.elementos.splice(indice, 1);
            console.log("El articulo se borro con exito");
            return true;
        }
    }

    
    //- El método buscarPorAutor, recibirá un string con el nombre del autor y retorna un arreglo con todos los artículos de lectura que correspondan.
    public buscarPorAutor(a:string):ArticuloLectura{
        if (searchList(elementos,a)){
            return true;


        }
      }
    
}
/*
Consideraciones:
- Cada artículo es identificado con su ISBN, por lo que debe ser único.
- En cada método, agregar un comentario resumiendo su comportamiento.*/

//Clase Libro con su constructor y setCantidadPaginas, tener en cuenta que un libro no tiene un limite de paginas.
class Libro extends ArticuloLectura{
    super(ISBN:number,autor:string,editorial:string,titulo:string,cantidadPaginas:number);

    public setCantidadPaginas(c:number):void{
        this.c=c;
    }
}
//Clase Revista con su atributo, constructor y setCantidadPaginas. Tener en cuenta que una revista puede tener un máximo de 50 páginas, en caso de ser mayor a ese número debe aparecer un error.
class Revista extends ArticuloLectura{
    private articulos:string[];

    public constructor(articulos:string){
        super(ISBN:number,autor:string,editorial:string,titulo:string,cantidadPaginas:number);
        this.articulos=articulos;
    }

    public setCantidadPaginas(c:number):void{
        this.c=c;
    }

}