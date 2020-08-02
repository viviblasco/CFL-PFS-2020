import LectorArchivo from "./LectorArchivos";
import Libro from './Libro';


export default class GestorLibros {
    private lector: LectorArchivo;
    private libros: Libro[];
    private contadorId: number;

    public constructor(librosArchivo?: string) {
        this.contadorId = 0;
        this.lector = new LectorArchivo();
        if (librosArchivo) {
            this.libros = this.cargarLibros(librosArchivo);
        } else {
            this.libros = new Array();
        }
    }

    /**
     * Carga de libros al gestor a partir de un archivo de texto
     * @param librosArchivo Es la ruta del archivo de texto a leer
     */
    private cargarLibros(librosArchivo: string): Libro[] {
        let librosString: string[];
        let aux: string[];
        let librosArreglo: Libro[];
        let archivo: boolean = this.lector.cargarArchivo(librosArchivo);

        if(archivo) {
            librosString = this.lector.leerArchivo();
        }
        librosArreglo = new Array();

        for (let i: number = 0; i<librosString.length; i++) {
            aux = librosString[i].split(',');
            this.contadorId ++;
            let libro = new Libro(this.contadorId, aux[0], aux[1], aux[2], parseInt(aux[3]));
            librosArreglo.push(libro);
        }

        return librosArreglo;
    }

    /**
     * Busca un libro en la lista del libros del registro.
     * @param titulo El libro a buscar
     * @returns Si encuentra un libro con mismo Titulo, Autor, Editiorial y Edicion, devuelve la posicion del arreglo donde esta ese libro, sino retorna -1
     */
    public buscarLibro(libro: Libro): number {
        let indice = -1;
        for(let i: number = 0; i<this.libros.length; i++) {
            if (this.libros[i].getTitulo() === libro.getTitulo() && this.libros[i].getAutor() === libro.getAutor() && this.libros[i].getEditorial() === libro.getEditorial() && this.libros[i].getEdicion() === libro.getEdicion()) {
                indice = i;
            }
        };
        return indice;
    }

    /**
     * Buscar todos los libros de un titulo en la lista del libros del registro.
     * @param titulo El titulo a buscar
     * @returns Imprime por consola todos los libros que tengan el título enviado por parámetro
     */
    public verLibrosPorTitulo(titulo: string): void {
        for(let i: number = 0; i<this.libros.length; i++) {
            if (this.libros[i].getTitulo() === titulo) {
                console.log(this.libros[i]);
            }
        };
    }

    /**
     * Buscar todos los libros de un autor en la lista del libros del registro.
     * @param autor El autor a buscar
     * @returns Imprime por consola todos los libros que tengan el título enviado por parámetro
     */
    public verLibrosPorAutor(autor: string): void {

        for(let i: number = 0; i<this.libros.length; i++) {
            
            if (this.libros[i].getAutor() === autor) {

                console.log(this.libros[i]);
            }
        };
    }
    /**
     * Agrega un libro al gestor, asignandole el id correspondiente
     * @param autor El Autor del libro a ingresar
     * @param titulo El Titulo del libro a ingresar
     * @param editorial La Editorial del libro a ingresar
     * @param edicion La edicion del libro a ingresar
     */
    public agregarLibro(autor: string, titulo: string, editorial: string, edicion: number): void {
        this.contadorId++;
        let libro: Libro = new Libro(this.contadorId, autor, titulo, editorial, edicion);
        this.libros.push(libro);
    }

    /**
     * Buscar un libro por Id en la lista del libros del registro.
     * @param id El id a buscar
     * @returns Si encuentra un libro con ese Id, retorna el indice donde está el libro, sino retorna -1
     */
    private buscarLibroPorId(id: number): number {
        let indice = -1;
        for(let i: number = 0; i<this.libros.length; i++) {
            let aux: Libro = this.libros[i];
            if (aux.getId() === id) {
                indice = i;
            } 
        }
        return indice;
    }

    public borrarLibro(id: number): void {
        let indice: number = this.buscarLibroPorId(id);
        if ( indice === -1) {
            console.log("No existe un libro con ese id en este gestor.");
        } else {
            this.libros.splice(indice, 1);
            console.log("Libro eliminado.");
        }
    }

    public modificarLibro(id: number, autor?: string, titulo?: string, editorial?: string, edicion?: number): void {
        let indice: number = this.buscarLibroPorId(id);
        if ( indice === -1) {
            console.log("No existe un libro con ese id en este gestor.");
        } else {
            if (autor) {
                this.libros[indice].setAutor(autor);
            }
            if (titulo) {
                this.libros[indice].setTitulo(titulo);
            }
            if (editorial) {
                this.libros[indice].setEditorial(editorial);
            }
            if (edicion) {
                this.libros[indice].setEdicion(edicion);
            }
            console.log("Libro actualizado.");
        }
    }
}