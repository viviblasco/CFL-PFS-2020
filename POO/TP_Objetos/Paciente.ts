class Paciente {
    private nombreYApellido:string;
    private edad:number;
    private telefono:number;

    constructor(nombreYApellido:string,edad:number,telefono:number) {
       this.nombreYApellido=nombreYApellido;
       this.edad = edad;
       this.telefono = telefono;
    }

    /*decirMiNombre() {
       console.log(this.nombre);
    }*/

}