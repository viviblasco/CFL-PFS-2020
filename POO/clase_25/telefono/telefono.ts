export default class Telefono{
    protected estaPrendido:boolean;
    private bateriaActual:number;
    protected linternaPrendida:boolean;

    constructor(){
        this.estaPrendido = true;
        this.bateriaActual = 10;
        this.linternaPrendida = true;

    }


    public mandarMensaje(mensaje:string):void{
       console.log("tilin")

    }
    public hacerLlamada(mensaje:string, numero:number):void{
       
       console.log("rin");
       console.log("llamada al numero :"+numero);


    }
    public prenderApagar(estado:boolean){
        if (estado = true){
            console.log("su telefono esta prendido");
        }else{
            console.log("telefono apagado");
        }
                
        }
        
       

}
