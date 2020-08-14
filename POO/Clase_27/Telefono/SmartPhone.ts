class SmartPhone {
    estaprendido:boolean;


    public prender():void{
        this.estaprendido=false;

    }

    public apagar():void{
        this.estaprendido=false;

    }
    public llamar(numero:string):void{
        console.log("Usted marco "+numero);

    }
    public sacarFoto():void{
        console.log("Click");

    }
}