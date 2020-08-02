import LectorArchivo from "./LectorArchivos";
import Paciente from "./Paciente";


export default class GestorPacientes {
    private lector: LectorArchivo;
    private paciente: Paciente[];
    private contadorId: number;

    public constructor(pacienteArchivo?: string) {
        this.contadorId = 0;
        this.lector = new LectorArchivo();
        if (pacienteArchivo) {
            this.paciente = this.cargarPacientes(pacienteArchivo);
        } else {
            this.paciente = new Array();
        }
    }
        
    /*
     * Carga de pacientes al gestor a partir de un archivo de texto
     * se lee la ruta del archivo 
     */

    private cargarPacientes(pacienteArchivo: string): Paciente[] {
        let pacienteString: string[];
        let aux: string[];
        let pacienteArreglo: Paciente[];
        let archivo: boolean = this.lector.cargarArchivo(pacienteArchivo);

        if(archivo) {
            pacienteString = this.lector.leerArchivo();
        }
        pacienteArreglo = new Array();

        for (let i: number = 0; i<pacienteString.length; i++) {
            aux = pacienteString[i].split(',');
            this.contadorId ++;
            let paciente = new Paciente(this.contadorId, aux[0], aux[1], aux[2], parseInt(aux[3]));
            pacienteArreglo.push(paciente);
        }

        return pacienteArreglo;
    }
      /**
     * Busca los paciente en los registros por DNI y por nombre y apellido
       devuelve la posicion del arreglo en donde esta el paciente o -1 si no existe
     */
    public buscarPaciente(paciente: Paciente): number {
        let indice = -1;
        for(let i: number = 0; i<this.paciente.length; i++) {
            if (this.paciente[i].getDNI() === paciente.getDNI() 
            && this.paciente[i].getNombreYApellido() === paciente.getNombreYApellido() ) {
                indice = i;
            }
        };
        return indice;
    }
        //muestra el paciente buscado por nombre y apellido
        public verPacientePorNombre(NombreYApellido: string): void {
            for(let i: number = 0; i<this.paciente.length; i++) {
                if (this.paciente[i].getNombreYApellido() === NombreYApellido) {
                    console.log(this.paciente[i]);
                }
            };
        }
        //muestra el paciente buscado por DNI

        public verPacientePorDni(DNI: number): void {
            for(let i: number = 0; i<this.paciente.length; i++) {
                if (this.paciente[i].getDNI() === DNI) {
                    console.log(this.paciente[i]);
                }
            };
        }
        //agrega un paciente a la lista
        public agregarPaciente(idPaciente:number,DNI:number,nombreYApellido:string,edad:number,telefono:number): void {
            this.contadorId++;
            let paciente: Paciente= new Paciente(this.contadorId, idPaciente, DNI,nombreYApellido, edad, telefono );
            this.paciente.push(paciente);
        }

        //busca un paciente por id en la lista de registro de pacientes
        private buscarPacientePorId(idPaciente: number): number {
            let indice = -1;
            for(let i: number = 0; i<this.paciente.length; i++) {
                let aux: Paciente = this.paciente[i];
                if (aux.getIdPaciente() === idPaciente) {
                    indice = i;
                } 
            }
            return indice;
        }


        //borrar un paciente del registro
        public borrarPaciente(idPaciente: number): void {
            let indice: number = this.buscarPacientePorId(idPaciente);
            if ( indice === -1) {
                console.log("El paciente no esta registrado");
            } else {
                this.paciente.splice(indice, 1);
                console.log("El Paciente se ha borrado del registro");
            }
        }

        //modifica los datos de un paciente en el registro
        
        public modificarPaciente(idPaciente:number,DNI:number,nombreYApellido:string,edad:number,telefono:number): void {
        let indice: number = this.buscarPacientePorId(idPaciente);
        if ( indice === -1) {
            console.log("El paciente no esta registrado");
        } else {
            if (idPaciente) {
                this.paciente[indice].setAutor(idPaciente);
            }
            if (DNI) {
                this.paciente[indice].setTitulo(DNI);
            }
            if (nombreYApellido) {
                this.paciente[indice].setEditorial(nombreYApellido);
            }
            if (edad) {
                this.paciente[indice].setEdicion(edad);
            }
            if (telefono) {
                this.paciente[indice].setEdicion(telefono);
            }
            console.log("El registro del paciente quedo actualizado");
        }
    }
    
    



    }