class Paciente {
   //variables
    private idPaciente:number;
    private DNI: number;
    private nombreYApellido:string;
    private edad:number;
    private telefono:number;
    
   //constructor
    constructor(idPaciente:number,DNI:number,nombreYApellido:string,edad:number,telefono:number) {
       this.idPaciente=idPaciente; 
       this.DNI=DNI; 
       this.nombreYApellido=nombreYApellido;
       this.edad = edad;
       this.telefono = telefono;
       
    }
   //metodos get

   public getId(): number {
      return this.idPaciente;
  }
  public getDNI(): number {
   return this.DNI;
}
  public getNombreYApellido(): string {
      return this.nombreYApellido;
  }
  public getEdad(): number {
      return this.edad;
  } 
  
  public getTelefono(): number {
      return this.telefono;
  }


  //metodos set
   
  public setId(idPaciente:number): void {
         this.idPaciente=idPaciente;
}
  public setDNI(DNI:number):void{
        this.DNI=DNI;
  }
  public setNombreYApellido(nombreYApellido:string):void{
         this.nombreYApellido=nombreYApellido;
  }
  public setTelefono(telefono:number):void{
         this.telefono=telefono;
  }
}