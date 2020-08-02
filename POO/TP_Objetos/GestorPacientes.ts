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
            let paciente = new Paciente(this.contadorId,(aux[0]), parseInt(aux[1]), (aux[2]), parseInt(aux[3]), parseInt(aux[4]));
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
            if (this.paciente[i].getId() == paciente.getId() ) {
                indice = i;
            }
            console.log(this.paciente[i].getId())
        };
        return indice;
    }


        //muestra el paciente buscado por nombre y apellido
        public verPacientePorNombre(nombreYApellido: string): void {
            for(let i: number = 0; i<this.paciente.length; i++) {
                if (this.paciente[i].getNombreYApellido() === nombreYApellido) {
                    console.log(this.paciente[i]);
                }
            };
        }
        //muestra el paciente buscado por el doctor que lo atiende

        public verPacientePorDoctor(doctor: string): void {
            for(let i: number = 0; i<this.paciente.length; i++) {
                if (this.paciente[i].getDoctor() == doctor) {
                    console.log(this.paciente[i]);
                }
            };
        }
        //agrega un paciente a la lista
        public agregarPaciente(doctor:string,DNI:number,nombreYApellido:string,edad:number,telefono:number): void {
            this.contadorId++;
            let paciente: Paciente= new Paciente(this.contadorId, doctor, DNI,nombreYApellido, edad, telefono );
            this.paciente.push(paciente);
            console.log("la/el paciente quedo agregada al registro");
        }

        //busca un paciente por id en la lista de registro de pacientes2
        private buscarPacientePorId(id: number): number {
            let indice = -1;
            for(let i: number = 0; i<this.paciente.length; i++) {
                let aux: Paciente = this.paciente[i];
                if (aux.getId() === id) {
                    indice = i;
                } 
            }
            return indice;
        }


        //borrar un paciente del registro
        public borrarPaciente(id: number): void {
            let indice: number = this.buscarPacientePorId(id);
            if ( indice === -1) {
                console.log("El paciente no esta registrado");
            } else {
                this.paciente.splice(indice, 1);
                console.log("El Paciente se ha borrado del registro");
            }
        }

        //modifica los datos de un paciente en el registro
        
        public modificarPaciente(id:number,doctor:string,Dni:number,nombreYApellido:string,edad:number,telefono:number): void {
        let indice: number = this.buscarPacientePorId(id);
        if ( indice === -1) {
            console.log("El paciente no esta registrado");
        } else {
            if (id) {
                this.paciente[indice].setId(id);
            }
            if (doctor) {
                this.paciente[indice].setDoctor(doctor);
            }

            if (Dni) {
                this.paciente[indice].setDni(Dni);
            }
            if (nombreYApellido) {
                this.paciente[indice].setNombreYApellido(nombreYApellido);
            }
            if (edad) {
                this.paciente[indice].setEdad(edad);
            }
            if (telefono) {
                this.paciente[indice].setTelefono(telefono);
            }
            console.log("El registro del paciente quedo actualizado");
        }
    }
    
    



    }