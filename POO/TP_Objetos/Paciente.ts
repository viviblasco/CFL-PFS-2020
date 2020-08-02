export default class Paciente {
   //variables
    private id:number;
    private Dni: number;
    private nombreYApellido:string;
    private edad:number;
    private telefono:number;
    
   //constructor
    constructor(id:number,Dni:number,nombreYApellido:string,edad:number,telefono:number) {
       this.id=id; 
       this.Dni=Dni; 
       this.nombreYApellido=nombreYApellido;
       this.edad = edad;
       this.telefono = telefono;
       
    }
   //metodos get

   public getId(): number {
      return this.id;
  }
  public getDNI(): number {
   return this.Dni;
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
   
  public setId(id:number): void {
         this.id=id;
}
  public setDNI(Dni:number):void{
        this.Dni=Dni;
  }
  public setNombreYApellido(nombreYApellido:string):void{
         this.nombreYApellido=nombreYApellido;
  }
  public setTelefono(telefono:number):void{
         this.telefono=telefono;
  }
}