

class Monitor{
    private encendido:boolean
    private brilloActual:number = 0
    private contrasteActual:number=0
    
    
    prenderApagar():void{
        if(this.encendido){
            this.encendido=true;
        }else{
            this.encendido=false;
        }
    }
    
    aumentarBrillo():void{
        this.brilloActual = this.brilloActual +1;
    }
    disminuirBrillo():void{
        this.brilloActual = this.brilloActual -1;
    }
    aumentarContraste():void{
        this.contrasteActual = this.contrasteActual +1;
    }
    disminuirContraste():void{
        this.contrasteActual = this.contrasteActual -1;
    }
    ingreseMarca(marca:string){


        console.log("Bienvenido a su Monitor: "+ marca);


    }
    //contruyendo monitor

    



}

let miMonitor = new Monitor();
let marca="sanyo";
miMonitor.ingreseMarca(marca);
miMonitor.prenderApagar();
miMonitor.aumentarBrillo();
miMonitor.aumentarContraste();
console.log(miMonitor);
console.log('');
