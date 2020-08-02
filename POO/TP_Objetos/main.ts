import GestorPacientes from "./GestorPacientes";
import * as readlineSync from './node_modules/readline-sync'; 

let miGestor1: GestorPacientes;
let miGestor2: GestorPacientes;
let accion: number;

// Probando Clase GestorPacientes
console.log('Probando Clase GestorPacientes\n');
console.log('Creando Gestor de pacientes desde archivo "infoPacientes.txt":');
miGestor1 = new GestorPacientes('./infoPacientes.txt');
console.log(miGestor1);
console.log('');

console.log('Creando los registros sin archivo:');
miGestor2 = new GestorPacientes();
console.log(miGestor2);
console.log('');



while (accion != 0) {
    ejecutar();
}


//declaracion de funciones

function menu(): number {
    
    console.log("Menu:")
    console.log("1) Agregar el registro de un paciente");
    console.log("2) Ver pacientes por doctor/a");
    console.log("3) Eliminar el registro de un paciente");
    console.log("4) Modificar el registro de un paciente");
    console.log("5) Ver todo el registro de pacientes");
    console.log("0) Salir\n");

    return readlineSync.questionInt("Seleccione una opcion: ");
}


function ejecutar(): void {
    accion = menu();
    if (accion === 1) {
        let doctor:string =  readlineSync.question("Doctor/a: ")
        let Dni: number = readlineSync.questionInt("Dni: ");
        let nombreYApellido: string = readlineSync.question("Nombre y Apellido: ");
        let edad: number = readlineSync.questionInt("edad: ");
        let telefono: number = readlineSync.questionInt("telefono: ");
        miGestor1.agregarPaciente(doctor,Dni,nombreYApellido,edad,telefono);
    } else if (accion === 2) {

        let doctor: string = readlineSync.question("Ingrese el doctor/a que lo atiende: ");
        miGestor1.verPacientePorDoctor(doctor);
    } 
      else if (accion === 3) {

        let id: number = readlineSync.questionInt("Ingrese el id del paciente a borrar: ");
        miGestor1.borrarPaciente(id);

    } else if (accion === 4) {
        let id: number = readlineSync.questionInt("Ingrese el id del paciente a actualizar: ");
        let doctor: string = null;
        let Dni: number = null;
        let nombreYApellido: string = null;
        let edad: number = null;
        let telefono:number = null;
        if (readlineSync.question("Desea cambiar el doctor? 1 (Si) - 2 (No) ") === 1 ) {
            doctor = readlineSync.question("Ingrese el nuevo doctor: ");
        }
        if (readlineSync.questionInt("Desea cambiar el Dni? 1 (Si) - 2 (No) ") === 1 ) {
            Dni = readlineSync.question("Ingrese el nuevo dni: ");
        }
        if (readlineSync.questionInt("Desea cambiar El nombre y/o el apellido (Si) - 2 (No) ") === 1 ) {
            nombreYApellido = readlineSync.question("Ingrese la nueva Editorial: ");
        }
        if (readlineSync.questionInt("Desea cambiar la Edad? 1 (Si) - 2 (No) ") === 1 ) {
            edad = readlineSync.questionInt("Ingrese la nueva edad: ");
        }
        if (readlineSync.questionInt("Desea cambiar el numero de telefono? 1 (Si) - 2 (No) ") === 1 ) {
            telefono = readlineSync.questionInt("Ingrese el nuevo numero de telefono: ");
        }
        miGestor1.modificarPaciente(id,doctor,Dni,nombreYApellido,edad,telefono);
    } else if (accion === 5) {
        console.log(miGestor1);
    }
}